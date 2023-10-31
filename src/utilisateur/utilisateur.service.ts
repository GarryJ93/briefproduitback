import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { Repository } from 'typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private userRepository: Repository<Utilisateur>,
  ) {}
  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const newUser = this.userRepository.create(createUtilisateurDto);
    const result = await this.userRepository.save(newUser);
    return result;
  }

  // findAll() {
  //   return `This action returns all utilisateur`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} utilisateur`;
  // }

  // update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
  //   return `This action updates a #${id} utilisateur`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} utilisateur`;
  // }
}
