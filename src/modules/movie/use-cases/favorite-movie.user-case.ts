import { Injectable, Logger } from '@nestjs/common';
import { FavoriteMovieRepository } from '../repository';

@Injectable()
export class FavoriteMovieUseCase {
  constructor(
    private readonly favoriteMovieRepository: FavoriteMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, favorite: boolean) {
    try {
      const movie = await this.favoriteMovieRepository.getOne(id, favorite);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
