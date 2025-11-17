import { Injectable } from '@nestjs/common';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';
import {
  CreateCriterionUseCase,
  findOneCriterionUseCase,
  ListCriterionUseCase,
  RemoveCriterionUseCase,
  UpdateCriterionUseCase,
} from './use-cases';

@Injectable()
export class CriterionService {
  constructor(
    private readonly createCriterionUseCase: CreateCriterionUseCase,
    private readonly listCriterionUseCase: ListCriterionUseCase,
    private readonly FindOneCriterionUseCase: findOneCriterionUseCase,
    private readonly removeCriterionUseCase: RemoveCriterionUseCase,
    private readonly updateCriterionUseCase: UpdateCriterionUseCase,
  ) {}

  create(createCriterionDto: CreateCriterionDto) {
    return this.createCriterionUseCase.execute(createCriterionDto);
  }

  findAll() {
    return this.listCriterionUseCase.execute();
  }

  findOne(id: string) {
    return this.FindOneCriterionUseCase.execute(id);
  }

  update(id: string, updateCriterionDto: UpdateCriterionDto) {
    return this.updateCriterionUseCase.execute(id, updateCriterionDto);
  }

  remove(id: string) {
    return this.removeCriterionUseCase.execute(id);
  }
}
