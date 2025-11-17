import { Injectable, Logger } from '@nestjs/common';
import { ListCriterionRepository } from '../repository/list-criterion.repository';

@Injectable()
export class ListCriterionUseCase {
  constructor(
    private readonly listcriterionRepository: ListCriterionRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const criterion = await this.listcriterionRepository.getAll();
      return criterion;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
