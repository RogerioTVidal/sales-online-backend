import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';


@Controller('city')
export class CityController {
    constructor(
        // eslint-disable-next-line prettier/prettier
        private readonly cityService: CityService
    ) { }

    @Get('/:stateId')
    async getAllCitiesByStateId(
        @Param('stateId') stateId: number
        ): Promise<CityEntity[]> {
        return this.cityService.getAllCitiesByStateId(stateId);
    }

    @Get()
    async getAllCities(): Promise<CityEntity[]> {
        return this.cityService.getAllcities();
    }
}
