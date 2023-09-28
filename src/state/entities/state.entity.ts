import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'state' })
export class StateEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'abbreviation', nullable: false })
    abbreviation: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'created_at', nullable: false })
    createdAt: string;

    @Column({ name: 'updated_at', nullable: false })
    updatedAt: string;
}
