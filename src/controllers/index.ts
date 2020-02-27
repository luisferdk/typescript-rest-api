import { Request, Response } from 'express';

export function getAll(req: Request, res: Response) {
  return res.json('Welcome to my API');
}
