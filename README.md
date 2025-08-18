Hotel Booking API
Um projeto de API RESTful para um sistema de reserva de casas, similar a um hotel, desenvolvido com Node.js e Express. A plataforma permite que usuários se cadastrem, gerenciem suas próprias casas e reservem acomodações disponíveis.

🚀 Funcionalidades
Este projeto se concentra em duas áreas principais: as ações do Usuário e o gerenciamento das Casas (Houses).

Usuário
Autenticação: Cadastro e login via e-mail.

Reserva de Casas:

Usuários podem reservar qualquer casa que não seja de sua propriedade.

Não é permitido reservar casas com status "Indisponível".

Gerenciamento de Reservas:

O usuário pode cancelar suas reservas a qualquer momento.

Casas (Houses)
Gerenciamento Completo (CRUD):

Um usuário logado pode cadastrar uma nova casa para aluguel.

É possível editar as informações ou excluir suas próprias casas a qualquer momento.

Detalhes da Casa:

Foto de Capa: Imagem principal de apresentação da casa.

Descrição: Informações detalhadas sobre a acomodação.

Localização: Endereço ou coordenadas da propriedade.

Preço da Diária: Custo da reserva por dia.

Status: Disponibilidade da casa (Disponível ou Indisponível).

🛠️ Tecnologias Utilizadas
O back-end desta aplicação será construído utilizando as seguintes tecnologias:

Node.js: Ambiente de execução JavaScript no servidor.

Express: Framework para a construção da API, gerenciamento de rotas e middlewares.