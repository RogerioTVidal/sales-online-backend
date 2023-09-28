import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateController } from './state.controller';
import { StateEntity } from './entities/state.entity';
import { StateService } from './state.service';

@Module({
    imports: [TypeOrmModule.forFeature([StateEntity])],
    controllers: [StateController],
    providers: [StateService]
})
export class StateModule {}
