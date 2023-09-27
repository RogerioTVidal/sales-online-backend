import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'phone' })
    phone: string;

    @Column({ name: 'nin', nullable: false })
    nin: string; //National Idenfication Number

    @Column({ name: 'user_type', nullable: false })
    user_type: string;

    @Column({ name: 'created_at', nullable: false })
    created_at: string;

    @Column({ name: 'updated_at', nullable: false })
    updated_at: string;

    @Column({ name: 'pwd', nullable: false })
    pwd: string;
}
