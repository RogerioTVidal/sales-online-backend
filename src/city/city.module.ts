import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CityController } from './city.controller';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [CacheModule.register(), TypeOrmModule.forFeature([CityEntity])],
    controllers: [CityController],
    providers: [CityService]
})
export class CityModule {}
