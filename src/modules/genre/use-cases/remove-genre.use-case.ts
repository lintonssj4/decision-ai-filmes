import { Injectable, Logger } from '@nestjs/common';
import { RemoveGenreRepository } from '../repository/remove-genre.repository';

@Injectable()
export class RemoveGenreUseCase {
  constructor(
    private readonly removeGenreRepository: RemoveGenreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const genre = await this.removeGenreRepository.remove(id);
      return genre;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
