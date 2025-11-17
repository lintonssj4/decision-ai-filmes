import { Injectable, Logger } from '@nestjs/common';
import { UpdateGenreDto } from '../dto/update-genre.dto';
import { UpdateGenreRepository } from '../repository/update-genre.repository';

@Injectable()
export class UpdateGenreUseCase {
  constructor(
    private readonly updateGenreRepository: UpdateGenreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateGenreDto) {
    try {
      const genre = await this.updateGenreRepository.update(id, data);
      return genre;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
