import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentResponse } from './dto/student-response.dto';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Jasim Khan', age: 24 },
    { id: 2, name: 'Wasim Khan', age: 38 },
  ];

  getAllStudents(): StudentResponse[] {
    return this.students;
  }

  getStudentById(id: number): StudentResponse {
    const student = this.students.find((s) => s.id === id);

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;
  }

  addNewStudent({ name, age }: { name: string; age: number }) {
    const newStudent = {
      id: Number(Date.now()),
      name,
      age,
    };

    this.students.push(newStudent);
    return this.students;
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
