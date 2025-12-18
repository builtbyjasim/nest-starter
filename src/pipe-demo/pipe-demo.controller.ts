import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

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

  // BODY FIELD PIPE
  @Post('body')
  bodyExample(
    @Body('name', UppercasePipe) name: string,
    @Body('age', ParseIntPipe) age: number,
  ) {
    return { name, age };
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
