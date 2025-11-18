import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class ListMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const list = await this.prisma.movie.findMany({
      include: {
        genre: true,
      },
      where: {
        isFavorite: true,
      },
    });
    return list;
  }
}
