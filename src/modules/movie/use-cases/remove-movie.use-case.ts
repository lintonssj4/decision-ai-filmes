import { Injectable, Logger } from '@nestjs/common';
import { RemoveMovieRepository } from '../repository/remove-movie.repository';

@Injectable()
export class RemoveMovieUseCase {
  constructor(
    private readonly removeMovieRepository: RemoveMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const movie = await this.removeMovieRepository.remove(id);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
