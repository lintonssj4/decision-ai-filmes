import { Injectable, Logger } from '@nestjs/common';
import { FindOneMovieRepository } from '../repository/findone-movie.repository';

@Injectable()
export class FindOneMovieUseCase {
  constructor(
    private readonly findOneMovieRepository: FindOneMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const movie = await this.findOneMovieRepository.getOne(id);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
