import { IsNumber, IsString } from 'class-validator';

export class AddStudentDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
