import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class FindOneMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getOne(id: string) {
    const movie = await this.prisma.movie.findUnique({
      where: { id: id },
    });
    return movie;
  }
}
