import { Module } from '@nestjs/common';
import { RamaisService } from './ramais.service';
import { RamaisController } from './ramais.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ramais, RamaisSchema } from './entities/ramal.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: Ramais.name,
      schema: RamaisSchema
    }])
  ],
  controllers: [RamaisController],
  providers: [RamaisService]
})
export class RamaisModule {}
