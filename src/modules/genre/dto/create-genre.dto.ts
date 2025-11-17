import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  id: string;
  @ApiProperty({
    description: 'Nome do gênero',
  })
  name: string;
  movie: string[];
  createdAt: Date;
}
