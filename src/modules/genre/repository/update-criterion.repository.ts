import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';
import { UpdateCriterionDto } from '../dto/update-criterion.dto';

@Injectable()
export class UpdateCriterionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, data: UpdateCriterionDto) {
    const criterion = await this.prisma.criterion.update({
      data,
      where: { id: id },
    });
    return criterion;
  }
}
