import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdSave, MdArrowBack } from "react-icons/md";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import api from "../../services/api";

import { Container, Content } from "../_layouts/default/styles";

const schema = Yup.object().shape({
  name: Yup.string().required("O título é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  idade: Yup.number().required("A idade precisa ser um número"),
  peso: Yup.number().required("A peso precisa ser um número"),
  altura: Yup.number().required("A altura precisa ser um número")
});

export default function NewStudent() {
  async function handleSubmit(data, { resetForm }) {
    try {
      const newStudent = {
        name: data.name,
        email: data.email,
        idade: data.idade,
        peso: data.peso,
        altura: data.altura
      };

      await api.post("/students", newStudent);

      toast.success("Aluno cadastrado com sucesso!");

      resetForm();
    } catch (err) {
      toast.error("Erro ao cadastrar o aluno. Verifique os dados.");
    }
  }

  return (
    <Container>
      <header>
        <h1>Cadastro de aluno</h1>
        <div>
          <Link className="voltar" to="/students">
            <MdArrowBack size={22} color="#FFF" />
            <span>Voltar</span>
          </Link>
        </div>
      </header>
      <Content>
        <Form schema={schema} initialData={null} onSubmit={handleSubmit}>
          <div className="row">
            <div className="coluna">
              <label htmlFor="name">Nome completo</label>
              <Input name="name" type="text" />
            </div>
          </div>

          <div className="row">
            <div className="coluna">
              <label htmlFor="email">Endereço de e-mail</label>
              <Input name="email" type="email" />
            </div>
          </div>

          <div className="row">
            <div className="coluna">
              <label htmlFor="idade">Idade</label>
              <Input name="idade" type="number" />
            </div>
            <div className="coluna">
              <label htmlFor="peso">
                Peso <small>(em kg)</small>
              </label>
              <Input name="peso" type="number" step="0.01" />
            </div>
            <div className="coluna">
              <label htmlFor="altura">Altura</label>
              <Input name="altura" type="number" step="0.01" />
            </div>
          </div>
          <div className="row">
            <button type="submit">
              <MdSave size={22} color="#FFF" /> Salvar
            </button>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
