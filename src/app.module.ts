import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { PipeDemoController } from './pipe-demo/pipe-demo.controller';

@Module({
  imports: [AuthModule, StudentModule],
  controllers: [AppController, UserController, PipeDemoController],
  providers: [AppService],
})
export class AppModule {}
