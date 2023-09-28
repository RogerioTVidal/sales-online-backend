import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'user_id', nullable: false })
    userId: number;

    @Column({ name: 'address1', nullable: false })
    address1: string;

    @Column({ name: 'address2' })
    address2: string;

    @Column({ name: 'zip', nullable: false })
    zip: string;

    @Column({ name: 'city_id', nullable: false })
    cityId: number;

    @Column({ name: 'created_at', nullable: false })
    createdAt: string;

    @Column({ name: 'updated_at', nullable: false })
    updatedAt: string;
}
