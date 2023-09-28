import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';

@Module({
    imports: [TypeOrmModule.forFeature([CityEntity])],
    controllers: [CityController],
    providers: [CityService]
})
export class CityModule {}
