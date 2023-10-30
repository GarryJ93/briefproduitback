import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Repository } from 'typeorm';
import { Produit } from './entities/produit.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>,
  ) {}
  async create(createProduitDto: CreateProduitDto) {
    const newProduct = this.produitRepository.create(createProduitDto);
    const result = await this.produitRepository.save(newProduct);
    return result;
  }

  async findAll() {
    return this.produitRepository.find();
  }

  async findOne(id: number) {
    const productFound = await this.produitRepository.findOneBy({
      id: id,
    });
    if (!productFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return productFound;
  }

  async update(id: number, updateProduitDto: UpdateProduitDto) {
    const productFound = await this.produitRepository.findOneBy({
      id: id,
    });
    const productUpdated: Partial<Produit> = {
      ...productFound,
      nom: updateProduitDto.nom,
      prix: updateProduitDto.prix,
      quantite: updateProduitDto.quantite,
      id_categorie: updateProduitDto.id_categorie,
    };

    if (!productFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    Object.assign(productFound, productUpdated);
    this.produitRepository.save(productFound);
    return productFound;
  }

  async remove(id: number) {
    const productFound = await this.produitRepository.findOneBy({
      id: id,
    });
    if (!productFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return await this.produitRepository.remove(productFound);
  }
}
