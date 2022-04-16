import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RamaisService } from './ramais.service';
import { CreateRamalDto } from './dto/create-ramal.dto';

@Controller('ramais')
export class RamaisController {
  constructor(private readonly ramaisService: RamaisService) {}

  @Post()
  create(@Body() createRamalDto: CreateRamalDto[]) { 
    return this.ramaisService.create(createRamalDto);
  }

  @Get()
  findAll() {
    return this.ramaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ramaisService.findOne(+id);
  }

  @Get('filter/:exp')
  async find(@Param('exp') exp: string) { 
    let result = await this.ramaisService.findFiltered(exp);
    return result;
  }

 
}
