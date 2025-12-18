import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { AddStudentDto } from './dto/add-student.dto';
import { StudentResponse } from './interface/student-response.interface';
import type { ApiResponseOptions } from './utils/api-response.util';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  // here no need for return type but i have keep it to understand the logic
  getAllStudents(): ApiResponseOptions<StudentResponse[]> {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.getStudentById(id);
  }

  @Post('add-student')
  addNewStudent(@Body() dto: AddStudentDto) {
    return this.studentService.addNewStudent(dto);
  }

  // this one is left for example incase you will come back to see
  @Delete(':id')
  deleteStudent(@Param('id', ParseIntPipe) id: number) {
    const response = this.studentService.deleteStudent(id);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'Student deleted successfully!',
      data: response,
    };
  }
}
