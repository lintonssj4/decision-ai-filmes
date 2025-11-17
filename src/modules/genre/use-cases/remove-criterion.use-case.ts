import { Injectable, Logger } from '@nestjs/common';
import { RemoveCriterionRepository } from '../repository/remove-criterion.repository';

@Injectable()
export class RemoveCriterionUseCase {
  constructor(
    private readonly removecriterionRepository: RemoveCriterionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const criterion = await this.removecriterionRepository.remove(id);
      return criterion;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
