import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

// @Injectable()
// export class AuthService {
//   login(email: string, password: string) {
//     if (email !== 'admin@test.com' || password !== '1234') {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     return {
//       userId: 1,
//       token: 'fake-jwt-token',
//     };
//   }
// }

@Injectable()
export class AuthService {
  login(dto: LoginDto) {
    const { email, password, phone } = dto;

    // fake validation (DB later)
    if (
      email !== 'admin@test.com' ||
      password !== '1234' ||
      phone !== '9999999999'
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      user: {
        id: 1,
        name: 'Jasim',
        phone: dto.phone,
      },
      token: 'jwt-token',
    };
  }
}
