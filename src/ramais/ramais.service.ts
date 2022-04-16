import { Injectable } from '@nestjs/common';
import { CreateRamalDto } from './dto/create-ramal.dto'; 
import { Ramais, RamaisDocument } from './entities/ramal.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Certificate } from 'crypto';

@Injectable()
export class RamaisService {

  constructor(@InjectModel(Ramais.name) private ramaisModel: Model<RamaisDocument>){}

  create(createRamalDto: CreateRamalDto[]) {
    let result = []
    createRamalDto.map((ramal: CreateRamalDto) => {

      ramal.number = ramal.number.toLocaleUpperCase();
      ramal.name = ramal.name.toLocaleUpperCase();
      ramal.local = ramal.local.toLocaleUpperCase();

      let createdRamal = new this.ramaisModel(ramal)
      createdRamal.save()
      result.push(createdRamal);
    }) 
    return result;
  }

  findAll() {
    return this.ramaisModel.find({}).sort({number:1})
  }

  async findFiltered(exp: string){
    let result = await this.ramaisModel.find({
      $or: [
        { number: { $regex: exp.toUpperCase() } },
        { name: { $regex: exp.toUpperCase() } },
        { local: { $regex: exp.toUpperCase() } }
      ]
    }).exec();
    return result;
  }

  findOne(id: number) {
    return this.ramaisModel.updateOne({number: id})
  }
  
}
