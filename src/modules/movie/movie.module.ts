import { Logger, Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'src/shared/shared.module';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModule],
  controllers: [MovieController],
  providers: [MovieService, ...useCases, ...repositories, Logger],
})
export class MovieModule {}
