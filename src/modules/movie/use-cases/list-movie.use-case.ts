import { Injectable, Logger } from '@nestjs/common';
import { ListMovieRepository } from '../repository/list-movie.repository';

@Injectable()
export class ListMovieUseCase {
  constructor(
    private readonly listMovieRepository: ListMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const movie = await this.listMovieRepository.getAll();
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
