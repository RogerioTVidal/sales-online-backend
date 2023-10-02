//import { Cache } from 'cache-manager';
import { CityEntity } from './entities/city.entity';
//import { Inject, Injectable } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CacheSalesService } from 'src/cacheSales/cacheSales.service';

@Injectable()
export class CityService {
    constructor(
        // eslint-disable-next-line prettier/prettier
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        private readonly cacheService: CacheSalesService,
    ) {}

    async getAllCitiesByStateId(stateIdPar: number): Promise<CityEntity[]>{
        return this.cacheService.getCache<CityEntity[]>(`state_${stateIdPar}`,
            () => this.cityRepository.find({where:{stateId: stateIdPar}})
        );

//      const citiesCache: CityEntity[] = await this.cacheManager.get(`state_${stateIdPar}`)
//      if (citiesCache){
//          return citiesCache;
//      }
//      const cities  =   await this.cityRepository.find({where:{stateId : stateIdPar}});
//
//      await this.cacheManager.set(`state_${stateIdPar}`, cities, 9000000);
//      return cities;
    }

    async getAllcities(): Promise<CityEntity[]>{
        return this.cityRepository.find();
    }
}
