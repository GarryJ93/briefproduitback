create table utilisateur (
id serial primary key not null,
nom varchar(50) not null,
prenom varchar(50) not null,
email varchar (100) not null unique,
motdepasse varchar(60) not null
);

create table categorie (
id serial primary key not null,
nom varchar(50) not null unique
);

create table produit (
id serial primary key not null,
nom varchar(255) not null unique,
prix int not null,
quantite int not null,
id_categorie int not null references categorie(id)
);

insert into categorie (nom) values ('Téléphone'), ('Tablette');