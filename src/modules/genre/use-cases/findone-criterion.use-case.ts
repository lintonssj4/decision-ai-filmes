import { Injectable, Logger } from '@nestjs/common';
import { findOneCriterionRepository } from '../repository/findone-criterion.repository';

@Injectable()
export class findOneCriterionUseCase {
  constructor(
    private readonly findonecriterionRepository: findOneCriterionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const criterion = await this.findonecriterionRepository.getOne(id);
      return criterion;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
