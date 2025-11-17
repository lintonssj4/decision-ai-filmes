import { Injectable, Logger } from '@nestjs/common';
import { CreateCriterionDto } from '../dto/create-criterion.dto';
import { CreateCriterionRepository } from '../repository/create-criterion.repository';

@Injectable()
export class CreateCriterionUseCase {
  constructor(
    private readonly createcriterionRepository: CreateCriterionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateCriterionDto) {
    try {
      const criterion = await this.createcriterionRepository.create(data);
      this.logger.log(`criterion created: ${criterion.name}`);
      return criterion;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
