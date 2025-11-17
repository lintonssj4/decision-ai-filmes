import { Injectable, Logger } from '@nestjs/common';
import { ListGenreRepository } from '../repository/list-genre.repository';

@Injectable()
export class ListGenreUseCase {
  constructor(
    private readonly listGenreRepository: ListGenreRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const genre = await this.listGenreRepository.getAll();
      return genre;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
