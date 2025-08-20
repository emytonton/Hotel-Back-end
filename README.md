## Hotel Booking API
Uma API RESTful para um sistema de aluguel e reserva de acomodações, desenvolvida com Node.js, Express e MongoDB. <br> <br>
[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,mongodb)](https://skillicons.dev) <br> <br>
Este projeto é uma plataforma completa que permite que usuários se cadastrem, gerenciem suas próprias casas (anúncios) e reservem acomodações disponíveis, seguindo uma arquitetura robusta e escalável. <br><br>

### Sobre o Projeto
O Hotel Booking API é um sistema de back-end que fornece todos os endpoints necessários para uma aplicação de reserva de casas, similar a um hotel ou Airbnb. A plataforma permite que usuários autenticados interajam com o sistema para listar, criar, e gerenciar tanto anúncios de casas quanto suas próprias reservas. <br><br>

### 🚀 Funcionalidades
Este projeto se concentra em três áreas principais: gerenciamento de Usuários, Casas (Houses) e Reservas (Reserves).

- Usuário <br>
   - Autenticação: Cadastro e login via e-mail.

- Dashboard: Rota específica para que o usuário possa listar apenas as casas que ele cadastrou. <br>

- Casas (Houses) <br>
  - Gerenciamento Completo (CRUD):

     - Um usuário logado pode cadastrar uma nova casa para aluguel.

     - É possível listar as casas disponíveis.

     - O proprietário pode editar as informações ou excluir suas próprias casas.

  - Detalhes da Casa:

    - Foto de Capa: Imagem principal de apresentação da casa.
      
    -  Descrição: Informações detalhadas sobre a acomodação.
      
    -  Localização: Endereço da propriedade.
      
    -  Preço da Diária: Custo da reserva por dia.
      
    -  Status: Disponibilidade da casa (Disponível ou Indisponível).

- Reservas (Reserves) <br>
   - Gerenciamento Completo (CRUD):

      - Usuários podem reservar qualquer casa que não seja de sua propriedade.
      
      -  O usuário pode listar todas as suas reservas.
      
      -  É possível cancelar (excluir) suas reservas ou modificá-las a qualquer momento.

- Regras de Negócio:

    - Não é permitido reservar casas com status "Indisponível".
    
    - O proprietário de uma casa não pode reservá-la para si mesmo.

### 🏗️ Arquitetura <br>
   O projeto foi desenvolvido seguindo o padrão de arquitetura MVC (Model-View-Controller).
  
  - Models: Representam a estrutura dos dados (Schemas do Mongoose) e a lógica de interação com o banco de dados.
  
  - Controllers: Contêm a lógica de negócio da aplicação, processando as requisições recebidas das rotas.
  
  - Views (Rotas): As rotas (endpoints) definidas com Express, que direcionam as requisições HTTP para os controllers apropriados.

### 🛠️ Tecnologias Utilizadas
O back-end desta aplicação foi construído utilizando as seguintes tecnologias e ferramentas:

 - Node.js: Ambiente de execução JavaScript no servidor.
  
 - Express: Framework para a construção da API, gerenciamento de rotas e middlewares.
  
 - MongoDB: Banco de dados NoSQL, utilizado para armazenar os dados de usuários, casas e reservas.
  
 - Mongoose: Biblioteca ODM (Object Data Modeling) para modelar e interagir com o MongoDB de forma estruturada.
  
 - Yup: Biblioteca para validação de schemas, garantindo a integridade dos dados que chegam à API.
  
 - Multer: Middleware para o upload de imagens (thumbnail das casas).
  
  

### ⛳ Endpoints da API
## Endpoints da API

| Método HTTP | Endpoint      | Descrição                                               | Autenticação Necessária |
|-------------|---------------|---------------------------------------------------------|--------------------------|
| POST        | /sessions     | Cria uma nova sessão, permitindo o login do usuário.    | Não                      |
| POST        | /users        | Cadastra um novo usuário.                               | Não                      |
| GET         | /houses       | Lista todas as casas disponíveis.                       | Não                      |
| POST        | /houses       | Cadastra uma nova casa.                                 | Sim                      |
| PUT         | /houses/:id   | Atualiza informações de uma casa existente.             | Sim                      |
| DELETE      | /houses/:id   | Remove uma casa cadastrada.                             | Sim                      |
| GET         | /dashboard    | Lista todas as casas cadastradas pelo usuário logado.   | Sim                      |
| POST        | /reservations | Cria uma nova reserva para uma casa.                    | Sim                      |
| GET         | /reservations | Lista todas as reservas do usuário logado.              | Sim                      |
| DELETE      | /reservations/:id | Cancela uma reserva existente.                      | Sim                      |




