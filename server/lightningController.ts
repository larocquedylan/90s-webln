import { Request, Response } from 'express';
// webln request provider
import { requestProvider } from 'webln';

export const hello = (req: Request, res: Response) => {
  res.send('hello from lightning');
};
