import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class ListGenreRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const list = await this.prisma.genre.findMany({});
    return list;
  }
}
