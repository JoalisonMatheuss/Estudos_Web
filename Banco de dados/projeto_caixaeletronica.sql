/*
CREATE TABLE contas (
	id integer PRIMARY KEY,
	titular varchar(100),
	agencia integer,
	conta integer,
	senha varchar(15),
	saldo float
);

CREATE TABLE historico (
	id_historico integer,
	id_conta integer REFERENCES contas(id),
	tipo integer,
	valor float,
	data_operacao date
);
*/
