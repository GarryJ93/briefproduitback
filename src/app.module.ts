import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { CategorieModule } from './categorie/categorie.module';
import { ProduitModule } from './produit/produit.module';
import { Produit } from './produit/entities/produit.entity';
import { Categorie } from './categorie/entities/categorie.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Utilisateur, Produit, Categorie],
      synchronize: false,
      logging: true,
    }),
    AuthModule,
    UtilisateurModule,
    CategorieModule,
    ProduitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
