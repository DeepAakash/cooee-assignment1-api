import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ItemReport } from './schemas/itemReport.schema';
import mongoose from 'mongoose';
import { Event } from 'src/event/schemas/event.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class ItemReportService {
  constructor(
    @InjectModel(ItemReport.name)
    private iRModel: mongoose.Model<ItemReport>,
    @InjectModel(Event.name)
    private eventModel: mongoose.Model<Event>,
  ) {}

  async findAll(query: { keyword: string }): Promise<AggregatedData[]> {

    // Creating the Materialised View from event table using aggregation pipeline
    const pipeline1: ItemReport[] = await this.eventModel
      .aggregate([
        {
          $group: {
            _id: {
              date: {
                $dateToString: {
                  format: '%Y-%m-%dT%H:00:00.000Z',
                  date: { $toDate: '$occurred' },
                },
              },
              itemID: '$item.id',
              itemName: '$item.name',
              event: '$name',
            },
            count: {
              $sum: 1,
            },
          },
        },
        {
          $project: {
            _id: {
              date: '$_id.date',
              event: '$_id.event',
              itemID: '$_id.itemID',
            },
            itemID: '$_id.itemID',
            itemName: '$_id.itemName',
            event: '$_id.event',
            count: '$count',
          },
        },
        {
          $sort: {
            '_id.date': 1,
            count: -1,
          },
        },
        {
          $out: {
            db: 'cooee',
            coll: 'itemReport',
          },
        },
      ])
      .exec();


    // To fetch data aaccording to given filter of the Item Name. If filter is not given return the whole data using aggregation pipeline
    const { keyword } = query;
    const pipeline2: AggregatedData[] = await this.iRModel
      .aggregate([
        {
          $match: {
            itemName: {
              $regex: new RegExp(keyword, 'i'), // Case sensitive encounter and $regex to encounter spaces etc passed in query
            },
          },
        },
        {
          $group: {
            _id: {
              date: '$_id.date',
              itemID: '$_id.itemID',
              itemName: '$itemName',
            },
            ViewCount: {
              $sum: {
                $cond: [{ $eq: ['$event', 'View Item'] }, '$count', 0],
              },
            },
            AddToCartCount: {
              $sum: {
                $cond: [{ $eq: ['$event', 'Add To Cart'] }, '$count', 0],
              },
            },
            PurchaseCount: {
              $sum: {
                $cond: [{ $eq: ['$event', 'Purchase'] }, '$count', 0],
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            DateTime: '$_id.date',
            ItemID: '$_id.itemID',
            ItemName: '$_id.itemName',
            ViewCount: 1,
            AddToCartCount: 1,
            PurchaseCount: 1,
          },
        },
        {
          $sort: {
            DateTime: 1,
            ViewCount: -1,
            AddToCartCount: -1,
          },
        },
      ])
      .exec();

    return pipeline2;
  }
}
