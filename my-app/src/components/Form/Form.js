import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Actions/registerAction";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import "./Form.css";

function Form() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [numero, setNumero] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
  }

  function TestaCPF(strCPF) {
    const validar = document.getElementById("cpf").value;

    if (validar === strCPF) {
      var Soma;
      var Resto;
      Soma = 0;
      if (strCPF === "00000000000") return false;

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto ===11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
      return true;
    } else {
      alert("cpf inválido!");
    }
  }

  function searchCep(e) {
    e.preventDefault();
    const cep = document.querySelector("#cep");

    const showData = (result) => {
      for (const campo in result) {
        if (document.querySelector("#" + campo)) {
          document.querySelector("#" + campo).value = result[campo];
        }
      }
    };

    cep.addEventListener("blur", (e) => {
      let search = cep.value.replace("-", "");
      const options = {
        method: "GET",
        mode: "cors",
        cache: "default",
      };

      fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then((response) => {
          response.json().then((data) => showData(data));
        })
        .catch((e) => console.log("Deu Erro: " + e.message));
    });
  }

  function validateAge(e) {
    e.preventDefault();
    const dataInput = document.getElementById("age").value;
    const dataAtual = new Date();

    const age = dataAtual - dataInput;

    if (age < 12) {
      alert("Não pode realizar o cadastro com essa idade!");
    } else {
      alert("Idade válida!");
    }
  }

  function registerUsers(event) {
    event.preventDefault();
    if (
      (id, name, email, password, age, cpf, cep, rua, bairro, cidade, uf, numero)
    ) {
      dispatch(
        register(
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
        )
      );
      history.push("/login");
    }
  }

  return (
    <form method="get" id="form" onChange={handleRegister}>
      <Input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
        required
        id="name"
        label="Nome"
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        id="email"
        label="Email"
      />
      <Input
        placeholder="Data de Nascimento"
        required
        onBlur={validateAge}
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="date"
        id="age"
        label="Data de Nascimento"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        id="senha"
        label="Senha"
      />
      <Input
        placeholder="CPF"
        value={cpf}
        onBlur={TestaCPF}
        maxlength="11"
        onChange={(e) => setCpf(e.target.value)}
        id="cpf"
        label="CPF"
      />
      <Input
        placeholder="CEP"
        value={cep}
        maxlength="9"
        onBlur={searchCep}
        onChange={(e) => setCep(e.target.value)}
        id="cep"
        label="CEP"
      />
      <Input
        placeholder="Rua"
        value={rua}
        onChange={(e) => setRua(e.target.value)}
        id="logradouro"
        label="Rua"
      />
      <Input
        placeholder="Bairro"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        id="bairro"
        label="Bairro"
      />
      <Input
        placeholder="Cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        id="localidade"
        label="Cidade"
      />
      <Input
        placeholder="Estado"
        value={uf}
        onChange={(e) => setUf(e.target.value)}
        id="uf"
        label="UF"
      />
      <Input
        placeholder="Numero"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        id="numero"
        label="Numero"
      />
      <Button
        onClick={registerUsers}
        id="btnSignUp"
        variant="contained"
        color="primary"
      >
        Cadastre-se
      </Button>
    </form>
  );
}
export default Form;
