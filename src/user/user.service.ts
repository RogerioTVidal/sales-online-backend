import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor{
    @InjectRepository(UserEntity)
    private readonly
    }
    
    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const saltOrRounds = 10;
        const pwdHash = await hash(createUserDto.pwd, saltOrRounds);
        //        console.log('hash', pwdHash)
        const user: UserEntity = {
            ...createUserDto,
            pwd: pwdHash,
        }
        //        this.users[this.users.length] = user;

        return user;
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return;
    }
}
