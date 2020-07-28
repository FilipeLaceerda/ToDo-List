class User {
  static lastId = 0;

  constructor(
    name,
    email,
    password,
    age,
    cpf,
    cep,
    rua,
    bairro,
    cidade,
    uf,
    numero
  ) {
    this.id = User.lastId++;
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.cpf = cpf;
    this.cep = cep;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.numero = numero;
  }
}

export default User;
