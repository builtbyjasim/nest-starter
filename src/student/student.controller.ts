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
import type { StudentResponse } from './dto/student-response.dto';
import type { ApiResponse } from 'src/common/interfaces/api-response.interface';
import { AddStudentDto } from './dto/add-student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents(): ApiResponse<StudentResponse[]> {
    const students = this.studentService.getAllStudents();

    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'user data fetch successfully!',
      data: students,
    };
  }

  @Get(':id')
  getStudentById(@Param('id', ParseIntPipe) id: number) {
    const student = this.studentService.getStudentById(id);
    return {
      statusCode: HttpStatus.OK,
      success: true,
      message: 'user data fetch successfully!',
      data: student,
    };
  }

  @Post('add-student')
  addNewStudent(@Body() dto: AddStudentDto) {
    const response = this.studentService.addNewStudent(dto);
    return {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: 'student added successfully!',
      data: response,
    };
  }

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
