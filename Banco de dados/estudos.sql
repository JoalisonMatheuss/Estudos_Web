/*
CREATE TABLE usuarios (
	id integer PRIMARY KEY,
	nome varchar(150),
	email varchar(150),
	senha varchar(15),
	data_nascimento date,
	faixa_salarial integer
);

CREATE TABLE faixas (
	id integer PRIMARY KEY,
	titulo VARCHAR(100)
);

INSERT INTO usuarios(id, nome, email, senha, data_nascimento, faixa_salarial)
values (1, 'Jooj', 'joalisonmatheus0@gmail.com', '123456789', now(), 1),
 (2, 'Pedro', 'pedrogustavo@gmail.com', '22222222', now(), 1),
 (3, 'Dri', 'adrianobatista@gmail.com', '33333333', now(), 2),
 (4, 'Max', 'max123@gmail.com', '444444444', now(), 3);
INSERT INTO usuarios(id, nome, email, senha, data_nascimento, faixa_salarial) 
values (5, 'Fantasma', 'fantasma@gmail.com', '666666', now(), 10);

INSERT INTO faixas(id, titulo)
values (1, '0 -1000'),(2, '1001 - 5000'), (3, '5001 - 30000'), (4, '30001 - 1000000');

SELECT usuarios.id, usuarios.nome, usuarios.email, 
usuarios.data_nascimento, faixas.titulo as faixa
FROM usuarios 
INNER JOIN faixas
ON faixas.id = usuarios.faixa_salarial;

CREATE VIEW usuariosprimeirafaixa AS
SELECT *FROM usuarios WHERE faixa_salarial = 1;
*/

SELECT *FROM usuariosprimeirafaixa;