import type { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { container } from 'tsyringe';

import Unauthorized from '../../../errors/unauthorized';
import { BlacklistService } from '../../../../modules/authentication/services/blackList';
import { FindByIdAndActiveUserService } from '../../../../modules/users/services/FindByIdAndActiveUserService';

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

    const findByIdAndActiveUserService = container.resolve(
      FindByIdAndActiveUserService,
    );

    await findByIdAndActiveUserService.execute(sub as string);

    response.locals = {
      userId: sub,
    };

    next();
  } catch (error) {
    throw new Unauthorized('Invalid token');
  }
}
