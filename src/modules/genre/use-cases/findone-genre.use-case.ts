import { Injectable, Logger } from '@nestjs/common';
import { FindOneGenreRepository } from '../repository/findone-genre.repository';

@Injectable()
export class FindOneGenreUseCase {
  constructor(
    private readonly findOneGenreRepository: FindOneGenreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const genre = await this.findOneGenreRepository.getOne(id);
      return genre;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
