import { Response, NextFunction } from 'express';

export const allowCors = (fn: (req: any, res: any) => Promise<void>) => async (req: any, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Convert true to string 'true'
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  await fn(req, res);
};

const handler = async (req: any, res: any) => {
  const d = new Date();
  res.end(d.toString());
};

export default allowCors(handler);
