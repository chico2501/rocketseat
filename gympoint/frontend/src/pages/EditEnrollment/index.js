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
  student_id: Yup.number().required("Escolha um aluno"),
  plan_id: Yup.number().required("Escolha um plano"),
  start_date: Yup.number().required("A data de início é obrigatória")
});

export default function EditEnrollment(enrollment) {
  const matricula = useSelector(state => enrollment.location.state.matricula);

  async function handleSubmit(data) {
    try {
      const newInfos = {
        student_id: data.student_id,
        plan_id: data.plan_id,
        start_date: data.start_date
      };

      await api.put(`/enrollments/${matricula.id}`, newInfos);

      toast.success("Dados alterados com sucesso!");
    } catch (err) {
      toast.error("Erro ao alterar. Verifique os dados.");
    }
  }

  return (
    <Container>
      <header>
        <h1>Edição de matrícula</h1>
        <div>
          <Link className="voltar" to="/enrollments">
            <MdArrowBack size={22} color="#FFF" />
            <span>Voltar</span>
          </Link>
        </div>
      </header>
      <Content>
        <Form schema={schema} initialData={matricula} onSubmit={handleSubmit}>
          <div className="row">
            <div className="coluna">
              <label htmlFor="student_id">Aluno</label>
              <Input name="student_id" type="text" />
            </div>
          </div>

          <div className="row">
            <div className="coluna">
              <label htmlFor="plan_id">Plano</label>
              <Input name="plan_id" type="number" />
            </div>
            <div className="coluna">
              <label htmlFor="start_date">Data de início</label>
              <Input name="start_date" type="text" disabled step="0.01" />
            </div>
            <div className="coluna">
              <label htmlFor="end_date">Data de término</label>
              <Input name="end_date" type="number" disabled step="0.01" />
            </div>
            <div className="coluna">
              <label htmlFor="total">Valor final</label>
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
