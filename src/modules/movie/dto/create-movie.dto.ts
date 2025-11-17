import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @IsString()
  id: string;
  @ApiProperty({
    description: 'Titulo do filme',
  })
  title: string;
  description: string;
  releaseYear: number;
  isFavorite: boolean;
  genreId: string;
  createdAt: Date;
}
