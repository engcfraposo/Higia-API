import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { 
    name,
    birthdate,
    profissionalNumber,
    cpf,
    zipCode,
    address,
    addressNumber,
    country,
    state,
    cellphone,
    email,
    password,
     } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ 
      name,
      birthdate,
      profissionalNumber,
      cpf,
      zipCode,
      address,
      addressNumber,
      country,
      state,
      cellphone,
      email,
      password,
    });

    return res.json(classToClass(user));
  }
}
