import { Injectable } from '@nestjs/common';
import {
  CreateMovieUseCase,
  FindOneMovieUseCase,
  ListMovieUseCase,
  RemoveMovieUseCase,
  UpdateMovieUseCase,
} from './use-cases';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(
    private readonly createMovieUseCase: CreateMovieUseCase,
    private readonly listMovieUseCase: ListMovieUseCase,
    private readonly findoneMovieUseCase: FindOneMovieUseCase,
    private readonly removeMovieUseCase: RemoveMovieUseCase,
    private readonly updateMovieUseCase: UpdateMovieUseCase,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.createMovieUseCase.execute(createMovieDto);
  }

  findAll() {
    return this.listMovieUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneMovieUseCase.execute(id);
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.updateMovieUseCase.execute(id, updateMovieDto);
  }

  remove(id: string) {
    return this.removeMovieUseCase.execute(id);
  }
}
