# 🎟️ Projeto Venda de Ingressos  

Uma aplicação completa para gestão de venda de ingressos, composta por um frontend simples, um backend robusto e um banco de dados na nuvem.  

## 🚀 Tecnologias Utilizadas  

### 📌 Frontend  
- HTML  
- CSS  
- JavaScript  

### 🛠️ Backend  
- Java + Spring Boot  

### 🗄️ Banco de Dados  
- MongoDB Atlas (nuvem)  

## 📋 Pré-requisitos  

Antes de iniciar a aplicação, certifique-se de ter instalado:  
- [Apache Maven](https://maven.apache.org/)  

## ▶️ Como Executar a Aplicação  

### 🎨 Frontend  
Para visualizar a interface, basta abrir o arquivo `index.html` em um navegador de sua preferência.  

### 🏗️ Backend  
Na raiz do diretório do backend, execute o seguinte comando para iniciar a aplicação:  

```sh
mvn spring-boot:run
```

### 🛢️ Banco de Dados  
Antes de rodar o backend, configure a conexão com o **MongoDB Atlas**.  
Para isso, edite o arquivo `application.properties` do projeto Spring Boot e adicione as credenciais corretas do banco.  

📌 **Observação:** No primeiro acesso, o banco estará vazio, ou seja, não haverá usuários nem eventos cadastrados.  

---

## 💡 Dicas e Solução de Problemas  

- Certifique-se de que o MongoDB Atlas está configurado corretamente e acessível.  
- Verifique se as dependências do projeto foram baixadas corretamente antes de rodar o backend.  
- Caso ocorra algum erro ao iniciar o backend, tente executar o seguinte comando para limpar o cache do Maven:  

```sh
mvn clean install
```

Se o problema persistir, verifique se todas as dependências do Maven foram baixadas corretamente e se a configuração do banco de dados está correta.  

Caso esteja enfrentando erros de conexão com o MongoDB Atlas, certifique-se de:  
- Ter configurado corretamente a **string de conexão** no arquivo `application.properties`.  
- Liberar o acesso ao banco na configuração de **IP Whitelist** do MongoDB Atlas.  
- Verificar se as credenciais de autenticação estão corretas.  

---