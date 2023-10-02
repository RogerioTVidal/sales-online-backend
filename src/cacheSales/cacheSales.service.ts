import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CacheSalesService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async getCache<T>(
            key: string, 
            functionRequest: () => Promise<T>
        ): Promise<T> 
    {
        const dataCache: T = await this.cacheManager.get(key);

        if (dataCache){
            return dataCache;
        }
        const dataReturned: T =  await functionRequest();

        await this.cacheManager.set(key, dataReturned);
        return dataReturned;
    }
}
