import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('Genre')
export class GenreController {
  constructor(private readonly GenreService: GenreService) {}

  @Post()
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.GenreService.create(createGenreDto);
  }

  @Get()
  findAll() {
    return this.GenreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.GenreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.GenreService.update(id, updateGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.GenreService.remove(id);
  }
}
