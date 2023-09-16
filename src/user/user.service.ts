import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;
        const pwdHash = await hash(createUserDto.pwd, saltOrRounds);
        //        console.log('hash', pwdHash)
        const user: User = {
            ...createUserDto,
            id: this.users.length + 1,
            pwd: pwdHash,
        }
        //        this.users[this.users.length] = user;

        this.users.push(user);

        return user;
    }
    
    async getAllUsers(): Promise<User[]> {
        return this.users;
    }
}
