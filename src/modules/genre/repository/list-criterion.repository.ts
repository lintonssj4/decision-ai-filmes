import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class ListCriterionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const list = await this.prisma.criterion.findMany({});
    return list;
  }
}
