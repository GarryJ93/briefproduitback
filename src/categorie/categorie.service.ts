import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorie } from './entities/categorie.entity';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private categoryRepository: Repository<Categorie>,
  ) {}
  // create(createCategorieDto: CreateCategorieDto) {
  //   return 'This action adds a new categorie';
  // }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneBy({ id: id });
  }

  // update(id: number, updateCategorieDto: UpdateCategorieDto) {
  //   return `This action updates a #${id} categorie`;
  // }

  remove(id: number) {
    return `This action removes a #${id} categorie`;
  }
}
