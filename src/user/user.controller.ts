import { Controller, Get } from '@nestjs/common';

@Controller('user') // decorator
export class UserController {
  @Get()
  getUser() {
    return {
      statusCode: 201,
      success: true,
      message: 'user data fetch successfully!',
    };
  }
}
