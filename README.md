# Hospedagem-BackEnd-Azure

## Sobre
Este projeto é uma api básica somente com dois gets com intuito didático para a hospedagem da api na plataforma Azure.

---

## Dependências e comandos utilizados

- npm install express --save
- npm install body-parser --save
- npm install prisma --save
- npx prisma init
- npm install @prisma/client --save
- npx prisma migrate dev
- npm install socket.io
- npm install --save @azure/web-pubsub-socket.io

---

## Banco de dados

A seguir, está o script utilizado para a criação do banco de dados:

```sql

create database hospedagem_db;

use hospedagem_db;

create table tbl_user(
	id int not null auto_increment primary key,
    nome varchar(80) not null,
    cargo varchar(80) not null,
    email varchar(255) not null,
    
	unique index(id)
);


insert into tbl_user(nome, cargo,email) values('Luiz Gustavo', 'Desenvolvedor Full-Stack', 'luizgustavo.sp2020@gmail.com');
insert into tbl_user(nome, cargo,email) values('Oswaldo Barbosa', 'Desenvolvedor Full-Stack', 'oswaldo@gmail.com');
insert into tbl_user(nome, cargo,email) values('Arthur Alves', 'Desenvolvedor Mobile', 'arthur@gmail.com');
insert into tbl_user(nome, cargo,email) values('Millena Ferreira', 'Desenvolvedora Front-End', 'millena@gmail.com');


```

---