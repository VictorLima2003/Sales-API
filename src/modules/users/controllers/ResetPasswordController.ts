import { Request, Response } from 'express';
import ResetPassordService from '../services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassord = new ResetPassordService();

    await resetPassord.execute({
      password,
      token,
    });

    return response.status(204).json();
  }
}
