import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiResponse } from 'src/common/interfaces/api-response.interface';
import { AuthResponseDto } from './dto/auth-response.dto';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   login(@Body() body: { email: string; password: string }) {
//     return this.authService.login(body.email, body.password);
//   }
// }

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<ApiResponse<AuthResponseDto>> {
    const result = await this.authService.login(dto);

    return {
      success: true,
      statusCode: 200,
      message: 'Login successful',
      data: result,
    };
  }
}
