import { IsString } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  id: string;
  name: string;
  movie: string[];
  createdAt: Date;
}
