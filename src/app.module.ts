import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development.local']
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            database: process.env.DB_DATABASE,
            host: process.env.DB_HOST,
            password: process.env.DB_PWD,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            entities: [`${__dirname}/**/*.entity{.js,.ts}`],
            migrations: [`${__dirname}/migration/{.ts,.js}`],
            migrationsRun: true
        }),
        UserModule
    ],
    controllers: [], //verbs
    providers: [] //services - business logic
})
export class AppModule {}
