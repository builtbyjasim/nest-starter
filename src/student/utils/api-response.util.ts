// src/common/utils/api-response.util.ts
import { HttpStatus } from '@nestjs/common';

export interface ApiResponseOptions<T> {
  data: T;
  message?: string;
  statusCode?: HttpStatus;
  success: boolean;
}

export function apiResponse<T>({
  data,
  message = 'Success',
  statusCode = HttpStatus.OK,
  success = true,
}: ApiResponseOptions<T>) {
  return {
    statusCode,
    success,
    message,
    data,
  };
}
