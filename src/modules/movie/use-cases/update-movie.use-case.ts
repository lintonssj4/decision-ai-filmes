import { Injectable, Logger } from '@nestjs/common';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { UpdateMovieRepository } from '../repository/update-movie.repository';

@Injectable()
export class UpdateMovieUseCase {
  constructor(
    private readonly updateMovieRepository: UpdateMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateMovieDto) {
    try {
      const movie = await this.updateMovieRepository.update(id, data);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
