import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdSave, MdArrowBack } from "react-icons/md";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import api from "../../services/api";

import { Container, Content } from "../_layouts/default/styles";

const schema = Yup.object().shape({
  title: Yup.string().required("O título é obrigatório"),
  duration: Yup.number().required("A duração precisa ser um número"),
  price: Yup.number().required("O preço precisa ser um número")
});

export default function EditPlan(plan) {
  const plano = useSelector(state => plan.location.state.plano);

  console.log(plano);

  async function handleSubmit(data) {
    try {
      const newInfos = {
        title: data.title,
        duration: data.duration,
        price: data.price
      };

      await api.put(`/plans/${plano.id}`, newInfos);

      toast.success("Dados alterados com sucesso!");
    } catch (err) {
      toast.error("Erro ao alterar. Verifique os dados.");
    }
  }

  return (
    <Container>
      <header>
        <h1>Edição de plano</h1>
        <div>
          <Link className="voltar" to="/plans">
            <MdArrowBack size={22} color="#FFF" />
            <span>Voltar</span>
          </Link>
        </div>
      </header>
      <Content>
        <Form schema={schema} initialData={plano} onSubmit={handleSubmit}>
          <div className="row">
            <div className="coluna">
              <label htmlFor="title">Título do plano</label>
              <Input name="title" type="text" />
            </div>
          </div>

          <div className="row">
            <div className="coluna">
              <label htmlFor="duration">
                Duração <small>(em meses)</small>
              </label>
              <Input name="duration" type="number" />
            </div>
            <div className="coluna">
              <label htmlFor="price">Preço</label>
              <Input name="price" type="number" step="0.01" />
            </div>
            <div className="coluna">
              <label htmlFor="total">Preço total</label>
              <Input name="total" type="number" disabled step="0.01" />
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
