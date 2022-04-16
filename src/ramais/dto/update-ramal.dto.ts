import { PartialType } from '@nestjs/mapped-types';
import { CreateRamalDto } from './create-ramal.dto';

export class UpdateRamalDto extends PartialType(CreateRamalDto) {}
