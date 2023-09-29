import { Cache } from 'cache-manager';
import { CityEntity } from './entities/city.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

    async getAllCitiesByStateId(stateIdPar: number): Promise<CityEntity[]>{
        const citiesCache: CityEntity[] = await this.cache
        return this.cityRepository.find({
            where: {
                stateId: stateIdPar,
            }
        });
    }

    async getAllcities(): Promise<CityEntity[]>{
        return this.cityRepository.find();
    }
}
