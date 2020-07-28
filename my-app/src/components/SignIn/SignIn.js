import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import "./SignIn.css";

/* const SAVED_USERS = "SAVED_USERS" */
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function logar() {
    const e_mail = localStorage.getItem("SAVED_USERS");
    const senha = localStorage.getItem("SAVED_USERS");

   

     console.log(e_mail, senha)
     history.push("/toDo");
    
    
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <Form >
        <Input
          onChange={(e) => setEmail(e.target.value)}
          id="input"
          required="true"
          placeholder="Email"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          id="input"
          required="true"
          placeholder="Senha"
        />
        <Button onClick={logar} id="btnLogin" variant="contained" color="primary">
          Sign In
        </Button>
      </Form>
    </div>
  );
}
export default SignIn;
