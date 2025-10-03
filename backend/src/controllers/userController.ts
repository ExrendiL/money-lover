import { Request, Response } from 'express';
import { getUsers } from '../services/userService';

export function getAllUsers(req: Request, res: Response) {
  const users = getUsers();
  res.json(users);
}
