import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; 
import { MongooseModule }  from '@nestjs/mongoose'
import { RamaisModule } from './ramais/ramais.module';
  

@Module({
  imports: [
    ConfigModule.forRoot(),     
    RamaisModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.itgff.mongodb.net/${process.env.DB_NAME}`),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
