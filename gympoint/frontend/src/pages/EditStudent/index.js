import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdSave } from "react-icons/md";
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

export default function EditStudent(student) {
  const estudante = useSelector(state => student.location.state.estudante);

  async function handleSubmit(data) {
    try {
      const newInfos = {
        name: data.name,
        email: data.email,
        idade: data.idade,
        peso: data.peso,
        altura: data.altura
      };

      await api.put(`/students/${estudante.id}`, newInfos);

      toast.success("Dados alterados com sucesso!");
    } catch (err) {
      toast.error("Erro ao alterar. Verifique os dados.");
    }
  }

  return (
    <Container>
      <header>
        <h1>Edição de aluno</h1>
      </header>
      <Content>
        <Form schema={schema} initialData={estudante} onSubmit={handleSubmit}>
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
