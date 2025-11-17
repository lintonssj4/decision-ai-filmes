import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @IsString()
  @ApiProperty({
    description: 'Nome da opção',
    type: String,
  })
  id: string;
  title: string;
  description: string;
  releaseYear: number;
  isFavorite: boolean;
  genreId: string;
  createdAt: Date;
}
