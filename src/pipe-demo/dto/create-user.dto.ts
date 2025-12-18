// create-user.dto.ts
import { IsInt, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  age: number;
}
