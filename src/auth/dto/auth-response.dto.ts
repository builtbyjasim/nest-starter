export class AuthResponseDto {
  user: {
    id: number;
    name: string;
    phone: string;
  };
  token: string;
}
