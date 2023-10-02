import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CacheSalesModule } from 'src/cacheSales/cacheSales.module';
import { CityController } from './city.controller';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        CacheSalesModule,
        CacheModule,
        TypeOrmModule.forFeature([CityEntity])
    ],
    controllers: [CityController],
    providers: [CityService]
})
export class CityModule {}
