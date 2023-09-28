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
    userType: number;

    @Column({ name: 'created_at', nullable: false })
    createdAt: string;

    @Column({ name: 'updated_at', nullable: false })
    updatedAt: string;

    @Column({ name: 'pwd', nullable: false })
    pwd: string;
}
