import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signInRequest } from "../../store/modules/auth/actions";

import logo from "../../assets/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="Gympoint" />
        <label htmlFor="email">Seu e-mail</label>
        <Input name="email" type="email" placeholder="Informe o seu e-mail" />

        <label htmlFor="password">Sua senha</label>
        <Input
          name="password"
          type="password"
          placeholder="Informe a sua senha"
        />

        <button type="submit">
          {loading ? "Aguarde..." : "Entrar no sistema"}
        </button>
      </Form>
    </>
  );
}
