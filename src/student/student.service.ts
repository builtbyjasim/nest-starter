import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { StudentResponse } from './interface/student-response.interface';
import { apiResponse, ApiResponseOptions } from './utils/api-response.util';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Jasim Khan', age: 24 },
    { id: 2, name: 'Wasim Khan', age: 38 },
  ];

  getAllStudents(): ApiResponseOptions<StudentResponse[]> {
    return apiResponse({
      statusCode: HttpStatus.OK,
      success: true,
      message: 'user data fetched successfully!',
      data: this.students,
    });
  }

  getStudentById(id: number): ApiResponseOptions<StudentResponse> {
    const student = this.students.find((s) => s.id === id);

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return apiResponse({
      statusCode: HttpStatus.OK,
      success: true,
      message: 'student fetched successfully!',
      data: student,
    });
  }

  addNewStudent({ name, age }: { name: string; age: number }) {
    const newStudent = {
      id: Number(Date.now()),
      name,
      age,
    };

    this.students.push(newStudent);

    return apiResponse({
      statusCode: HttpStatus.CREATED,
      success: true,
      message: 'student added successfully!',
      data: this.students,
    });
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((student) => student.id === id);

    if (index === -1) {
      throw new NotFoundException('Student not found');
    }

    this.students.splice(index, 1);
    return this.students;
  }
}
