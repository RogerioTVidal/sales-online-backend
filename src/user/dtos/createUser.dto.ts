export interface CreateUserDto {
    name: string;
    email: string;
    phone: string;
    nin: string; //National Idenfication Number
    user_type: number;
    created_at: string;
    updated_at: string;
    pwd: string;
}
