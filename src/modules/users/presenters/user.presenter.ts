import { Injectable } from '@nestjs/common';

import { UserEntity, UserObject } from '../../../entities/users';

@Injectable()
export class UserPresenter {
  public async present(user: UserEntity): Promise<UserObject> {
    return {
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      identification_number: user.identification_number,
      phone_number: null,
      terms: user.terms,
      notifications: user.notifications,
      is_active: user.is_active,
      uid: user.uid,
      role: user.role,
      auth_provider: user.auth_provider,
      auth_type: user.auth_type,
      dynamic_info: {},
      organization_client_id: user.organization_client_id,
    };
  }
}
