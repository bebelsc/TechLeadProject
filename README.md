# TechLeadProject
Cargo: Desenvolvedor(a) JAVA | Senioridade: Pleno | Linguagem Escolhida: Java e Angular

Para este projeto, foram criadas três tabelas no banco de dados (usuario, livro e empréstimo) para fazer o gerenciamento de uma biblioteca virtual. Seguindo as orientações do desafio, segue e lista de funcionalidades que foram feitas e quais não foram completas até a data de entrega (27/02/24):


## 1. Deve conter uma tela inicial de login: OK
## 2. Na tela de login deverão existir links de cadastre-se e esqueci minha senha para que novos usuários possam ser cadastrados e antigos usuários possam recuperar o acesso: OK
## 3. Esse cadastro será sempre de usuário do perfil cliente, já o perfil administrador deve ser persistido diretamente no banco de dados, assim que a aplicação subir: OK
## 4.  O usuário de perfil administrador terá uma tela de gerência de livros, no qual ele poderá cadastrar / editar / excluir / listar / detalhar os livros: OK
## 5. O usuário de perfil cliente terá uma tela que poderá consultar a lista completa de livros (OK), podendo cadastrar novos livros (OK), no entanto, editar e excluir somente aqueles cadastrados por ele (NOK: Eles estão conseguindo editar/excluir todos)
## 6. Um usuário comum do sistema deverá solicitar o empréstimo selecionando o livro desejado em uma área de “solicitações de empréstimo” no sistema: (NOK: pelo back esta funcionando corretamente, chamando pelo front não)
## 7. Ao solicitar o empréstimo, o sistema deverá validar se o livro solicitado está em estoque e disponível para empréstimo: OK 
## 8. Ao realizar um empréstimo, deverá ser especificado de quantos dias será o empréstimo: OK
## 9.  O perfil será responsável por aceitar as solicitações de empréstimo (OK), informar quando uma devolução for realizada (OK) e ver os empréstimos que estão em andamento (NOK)
## 10.  Executar penalidade em situações de atraso de entrega e perda/danos referentes aos livros (NOK)

## Desafios pessoais
 Ao realizar os testes pelo postman todas as rotas estão funcionando corretamente, chamando pelo front estão dando alguns problemas para enviar alguns dados que são obrigatorios no back para os cadastros/edições. As demais funcionalidades não foram iniciadas pois tentei corrigir os erros das outras telas até o prazo.

## ROTAS DA API

# Emprestimo

Criar Emprestimo

Rota: POST /api/emprestimos/criar-emprestimo
Descrição: Cria um novo empréstimo com base nas informações fornecidas.
Corpo da Requisição (JSON): Emprestimo
Resposta de Sucesso: Retorna o novo empréstimo criado.
Código de Resposta: 201 (CREATED)

Devolver Empréstimo

Rota: POST /api/emprestimos/devolver-emprestimo/{idEmprestimo}
Descrição: Marca o empréstimo especificado como devolvido.
Parâmetro de Path: idEmprestimo (ID do empréstimo a ser devolvido)
Resposta de Sucesso: Mensagem indicando que o empréstimo foi devolvido com sucesso.
Código de Resposta: 200 (OK)

Aprovar/Rejeitar Empréstimo

Rota: POST /api/emprestimos/aprovar-rejeitar-emprestimo/{idEmprestimo}
Descrição: Aprova ou rejeita o empréstimo com base no parâmetro 'aprovar'.
Parâmetro de Path: idEmprestimo (ID do empréstimo a ser aprovado ou rejeitado)
Parâmetro de Consulta: aprovar (booleano indicando se o empréstimo deve ser aprovado)
Resposta de Sucesso: Mensagem indicando se o empréstimo foi aprovado ou rejeitado com sucesso.
Código de Resposta: 200 (OK)

Verificar Empréstimos Atrasados

Rota: POST /api/emprestimos/verificar-emprestimos-atrasados
Descrição: Verifica empréstimos atrasados e realiza as ações necessárias.
Resposta de Sucesso: Mensagem indicando que a verificação de empréstimos atrasados foi concluída.
Código de Resposta: 200 (OK)

Observações:

Todas as rotas aceitam requisições CORS do domínio http://localhost:4200.
Certifique-se de seguir a estrutura correta para os corpos de requisição, conforme especificado para cada rota.
Em caso de sucesso, as respostas contêm informações relevantes ou mensagens de confirmação.
Em caso de falha, o código de resposta indicará o motivo e será acompanhado por uma mensagem explicativa, quando apropriado.

# Usuario
Criar Usuário

Rota: POST /api/usuario/criar
Descrição: Cria um novo usuário com base nas informações fornecidas. Se o tipo de usuário não for especificado, será definido como "Cliente" por padrão.
Corpo da Requisição (JSON): Usuario
Resposta de Sucesso: Retorna o novo usuário criado.
Código de Resposta: 201 (CREATED)

Login

Rota: POST /api/usuario/login
Descrição: Autentica um usuário com base nas credenciais fornecidas (e-mail e senha).
Corpo da Requisição (JSON): LoginRequest (contendo e-mail e senha)
Resposta de Sucesso: Retorna o usuário autenticado.
Código de Resposta: 200 (OK)
Resposta de Falha: Retorna 401 (UNAUTHORIZED) se as credenciais fornecidas não forem válidas.

Observações:

Todas as rotas aceitam requisições CORS do domínio http://localhost:4200.
Certifique-se de seguir a estrutura correta para os corpos de requisição, conforme especificado para cada rota.
Em caso de sucesso, as respostas contêm informações relevantes ou mensagens de confirmação.
Em caso de falha, o código de resposta indicará o motivo e será acompanhado por uma mensagem explicativa, quando apropriado.

# Livro 

Cadastrar Livro

Rota: POST /api/livro/cadastrar
Descrição: Cadastra um novo livro com base nas informações fornecidas.
Corpo da Requisição (JSON): Livro
Resposta de Sucesso: Retorna o novo livro cadastrado.
Código de Resposta: 201 (CREATED)

Editar Livro

Rota: PUT /api/livro/editar/{id}
Descrição: Edita as informações de um livro existente com base no ID fornecido.
Parâmetro de Caminho: id (ID do livro a ser editado)
Corpo da Requisição (JSON): Livro
Resposta de Sucesso: Retorna o livro editado.
Código de Resposta: 200 (OK)

Excluir Livro

Rota: DELETE /api/livro/excluir/{id}
Descrição: Exclui um livro com base no ID fornecido.
Parâmetro de Caminho: id (ID do livro a ser excluído)
Resposta de Sucesso: Retorna 204 (NO CONTENT) se o livro for excluído com sucesso.

Listar Livros

Rota: GET /api/livro/listar
Descrição: Lista todos os livros cadastrados.
Resposta de Sucesso: Retorna a lista de livros.
Código de Resposta: 200 (OK)

Buscar Livro por ID

Rota: GET /api/livro/buscar/{id}
Descrição: Busca um livro com base no ID fornecido.
Parâmetro de Caminho: id (ID do livro a ser buscado)
Resposta de Sucesso: Retorna o livro encontrado.
Código de Resposta: 200 (OK)
Resposta de Falha: Retorna 404 (NOT FOUND) se o livro não for encontrado.
Observações:

Todas as rotas aceitam requisições CORS do domínio http://localhost:4200.
Certifique-se de seguir a estrutura correta para os corpos de requisição, conforme especificado para cada rota.
Em caso de sucesso, as respostas contêm informações relevantes ou mensagens de confirmação.
Em caso de falha, o código de resposta indicará o motivo e será acompanhado por uma mensagem explicativa, quando apropriado.


## Banco de Dados
O Banco de dados foi criado em MySQL.

CREATE SCHEMA `techlead_project` ;

CREATE TABLE `emprestimo` (
  `idemprestimo` int NOT NULL AUTO_INCREMENT,
  `idlivro` int NOT NULL,
  `idusuario` int NOT NULL,
  `quantidade_dias` int NOT NULL,
  `status` varchar(45) NOT NULL,
  `data_inicio_emprestimo` datetime DEFAULT NULL,
  PRIMARY KEY (`idemprestimo`),
  KEY `idLivro_idx` (`idlivro`),
  KEY `idUsuario_idx` (`idusuario`),
  CONSTRAINT `idLivro` FOREIGN KEY (`idlivro`) REFERENCES `livro` (`idlivro`),
  CONSTRAINT `idUsuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `livro` (
  `idlivro` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `data_cadastro` datetime NOT NULL,
  `quantidade_livros` int DEFAULT '1',
  `idusuario_cadastrou` int NOT NULL,
  PRIMARY KEY (`idlivro`),
  KEY `idusuario_cadastrou_idx` (`idusuario_cadastrou`),
  CONSTRAINT `idusuario_cadastrou` FOREIGN KEY (`idusuario_cadastrou`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(20) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


## POSTMAN

Chamadas criadas no POSTMAN para testes.

# GET - Buscar livro por Id
curl --location 'http://localhost:8080/api/livro/buscar/2'

# POST - Cadastrar livro
curl --location 'http://localhost:8080/api/livro/cadastrar' \
--header 'Content-Type: application/json' \
--data-raw '{
  "nome": "Livro de Teste",
  "autor": "Autor do Teste",
  "dataCadastro": "2022-02-23",
  "quantidadeLivros": 10,
  "usuario": {
    "idUsuario": 1,
    "nome": "Usuário de Teste",
    "email": "usuario@teste.com",
    "senha": "senha123",
    "tipo": "Administrador"
  }
}'

# PUT - Editar Livro
curl --location --request PUT 'http://localhost:8080/api/livro/editar/6' \
--header 'Content-Type: application/json' \
--data '{
  "nome": "Editado",
  "autor": "Maria Isabel",
  "quantidadeLivros": 5
}'

# DELETE - Deletar livro
curl --location --request DELETE 'http://localhost:8080/api/livro/excluir/5'

# GET - Listar livros
curl --location 'http://localhost:8080/api/livro/listar'

# POST - Criar Usuário
curl --location 'http://localhost:8080/api/usuario/criar' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nome": "Bibliotecario",
    "tipo": "Bibliotecario",
    "email": "bibliotecario@teste.com",
    "senha": "senhab"
}'

# POST - Login
curl --location 'http://localhost:8080/api/usuario/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "usuarioteste@teste.com",
    "senha": "senhate"
}'

# POST - Criar empréstimo
curl --location 'http://localhost:8080/api/emprestimos/criar-emprestimo' \
--header 'Content-Type: application/json' \
--data '{
  "livro": {
    "idLivro": 6
  },
  "usuario": {
    "idUsuario": 1
  },
  "quantidadeDias": 7,
  "status": "Criado"
}
'
# POST - Devolver Emprestimo
curl --location --request POST 'http://localhost:8080/api/emprestimos/devolver-emprestimo/2'

# POST - Aprovar/Rejeitar Emprestimo
curl --location --request POST 'http://localhost:8080/api/emprestimos/aprovar-rejeitar-emprestimo/1?aprovar=true'

# POST - Verificar Emprestimos Atrasados
curl --location --request POST 'http://localhost:8080/api/emprestimos/verificar-emprestimos-atrasados'

