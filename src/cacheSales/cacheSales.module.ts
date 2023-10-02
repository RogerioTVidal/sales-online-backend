import { Module } from '@nestjs/common';
import { CacheSalesService } from './cacheSales.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    //    imports: [CacheModule.register({ ttl:  })],
    imports: [
        CacheModule.register({
            isGlobal: true,
            ttl: 3 * 60 * 60 * 1000
        })
    ],
    providers: [CacheSalesService],
    exports: [CacheSalesService]
})
export class CacheSalesModule {}
