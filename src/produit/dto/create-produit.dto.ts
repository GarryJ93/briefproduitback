import { Categorie } from 'src/categorie/entities/categorie.entity';

export class CreateProduitDto {
  nom: string;
  prix: number;
  quantite: number;
  id_categorie: number;
  categorie: Categorie;
}
