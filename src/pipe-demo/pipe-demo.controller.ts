import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('pipe-demo')
export class PipeDemoController {
  // PARAM PIPE
  @Get('param/:name')
  paramExample(@Param('name', UppercasePipe) name: string) {
    return name;
  }

  // QUERY PIPE
  @Get('query')
  queryExample(@Query('search', UppercasePipe) search: string) {
    return search;
  }

  // pipe don't work with object like body it works only with single value
  // BODY + VALIDATION + PIPE
  @Post('body')
  bodyExample(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    dto: CreateUserDto,

    @Body('name', UppercasePipe) name: string,
  ) {
    return {
      ...dto,
      name, // validated + transformed
    };
  }
}

// use case in postman

// GET /pipe-demo/param/jasim
// → "JASIM"

// GET /pipe-demo/query?search=react
// → "REACT"

// POST /pipe-demo/body
// {
//   "name": "jasim khan",
//   "age": "24"
// }
