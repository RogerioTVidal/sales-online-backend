import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableAddress1695848741363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.address (
                id integer NOT NULL,
                user_id integer NOT NULL,
                address1 character varying,
                address2 character varying,
                zip character varying NOT NULL,
                city_id integer NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (user_id) references public.user(id),
                foreign key (city_id) references public.city(id)
            );
            
            CREATE SEQUENCE public.address_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;
            
            ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);
        `);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE public.address;
        `);
    }
}