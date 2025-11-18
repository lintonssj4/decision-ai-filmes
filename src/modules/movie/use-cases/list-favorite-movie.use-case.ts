import { Injectable, Logger } from '@nestjs/common';
import { ListFavoriteMovieRepository } from '../repository';

@Injectable()
export class ListFavoriteMovieUseCase {
  constructor(
    private readonly listFavoriteMovieRepository: ListFavoriteMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const movie = await this.listFavoriteMovieRepository.getAll();
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
