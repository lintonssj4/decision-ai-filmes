import { Injectable, Logger } from '@nestjs/common';
import { CreateGenreDto } from '../dto/create-genre.dto';
import { CreateGenreRepository } from '../repository/create-genre.repository';

@Injectable()
export class CreateGenreUseCase {
  constructor(
    private readonly createGenreRepository: CreateGenreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateGenreDto) {
    try {
      const genre = await this.createGenreRepository.create(data);
      this.logger.log(`genre created: ${genre.name}`);
      return genre;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
