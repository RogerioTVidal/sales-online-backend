export interface CreateUserDto {
    name: string;
    email: string;
    phone: string;
    nin: string; //National Idenfication Number
    userType: number;
    pwd: string;
}
