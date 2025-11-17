import { Injectable, Logger } from '@nestjs/common';
import { UpdateCriterionDto } from '../dto/update-criterion.dto';
import { UpdateCriterionRepository } from '../repository/update-criterion.repository';

@Injectable()
export class UpdateCriterionUseCase {
  constructor(
    private readonly updatecriterionRepository: UpdateCriterionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateCriterionDto) {
    try {
      const criterion = await this.updatecriterionRepository.update(id, data);
      return criterion;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
