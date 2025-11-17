import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateCriterionDto {
  @IsString()
  id: string;
  name: string;
  @IsNumber()
  weight: number;
  @IsBoolean()
  active: boolean;
  @IsDate()
  createAt: Date;
}
