import type { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { container } from 'tsyringe';

import Unauthorized from '../../../errors/unauthorized';
import { FindByIdUserService } from '../../../../modules/users/services/FindByIdUserService';
import { BlacklistService } from '../../../../modules/authentication/services/blackList';

export async function isAuth(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Unauthorized('Token missing');
  }

  const [, token] = authHeader.split(' ');
  try {
    const { sub } = verify(token, process.env.APP_SECRET as string);

    const blacklistService = container.resolve(BlacklistService);
    const isTokenBlacklisted = await blacklistService.isTokenBlacklisted(token);

    if (isTokenBlacklisted) {
      throw new Unauthorized('Invalid token');
    }

    const findByIdUserService = container.resolve(FindByIdUserService);

    await findByIdUserService.execute(sub as string);

    response.locals = {
      userId: sub,
    };

    next();
  } catch (error) {
    throw new Unauthorized('Invalid token');
  }
}
