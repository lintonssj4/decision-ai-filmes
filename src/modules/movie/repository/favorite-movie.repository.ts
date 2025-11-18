import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class FavoriteMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getOne(id: string, favorite: boolean) {
    const genre = await this.prisma.genre.update({
      where: { id: id },
      data: { isFavorite: favorite },
    });
    return genre;
  }
}
