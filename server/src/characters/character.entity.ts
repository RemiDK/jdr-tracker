import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    maxHealth: number;

    @Column()
    initiative: number;

    @Column()
    type: string;

    @Column({ default: false })
    selected: boolean;
}