import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../../entities/users/user.entity';
import { JwtService } from '../services/auth.service';

interface PresentTokenResponse {
  token: string;
}

@Injectable()
export class AuthPresenter {
  constructor(private readonly jwtService: JwtService) {}

  public async presentToken(user: UserEntity): Promise<PresentTokenResponse> {
    const { token } = this.jwtService.createJwt(user);
    return { token };
  }
}
