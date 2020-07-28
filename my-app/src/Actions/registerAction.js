import User from "../components/Form/User";

export function register(
  id,
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
  const user = new User(
    id,
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
  );
  return { type: "register", payload: user };
}
