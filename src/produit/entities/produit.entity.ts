import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Produit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  nom: string;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  prix: number;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  quantite: number;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  id_categorie: number;

  @ManyToOne(() => Categorie, (categorie) => categorie.produit, {
    eager: true,
  })
  @JoinColumn({ name: 'id_categorie' })
  categorie: Categorie;
}
