import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class UpdateMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, data: UpdateMovieDto) {
    const movie = await this.prisma.movie.update({
      data,
      where: { id: id },
    });
    return movie;
  }
}
