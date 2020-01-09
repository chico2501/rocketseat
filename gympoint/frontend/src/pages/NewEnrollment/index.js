import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdSave, MdArrowBack } from "react-icons/md";
import { Form, Input, Select } from "@rocketseat/unform";
import * as Yup from "yup";

import api from "../../services/api";

import { Container, Content, Students } from "../_layouts/default/styles";

const schema = Yup.object().shape({
  name: Yup.number().required("Escolha um aluno"),
  plan_id: Yup.number().required("Escolha um plano"),
  start_date: Yup.number().required("A data de início é obrigatória")
});

export default function NewEnrollment() {
  const [showStudentList, setShowStudentList] = useState(false);
  const [estudantes, setEstudantes] = useState([]);

  const [student, setStudent] = useState(null);

  const [searchName, setSearchName] = useState((student.name: ""));

  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState(null);

  function handleChangePlan(e) {
    setPlan(plans.find(p => p.id === parseInt(e.target.value, 10)));
  }

  function handleStudentSelect(s) {
    setStudent(s);
    setShowStudentList(false);
  }

  async function loadStudents(name) {
    const response =
      name === ""
        ? await api.get("/students")
        : await api.get(`/students/?=${name}`);

    setEstudantes(response.data);
  }

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get("/plans");

      setPlans(response.data);
    }

    loadStudents();
    loadPlans();
  }, []);

  useEffect(() => {
    if (student === null || searchName !== student.name)
      setShowStudentList(true);
    loadStudents(searchName);
  }, [searchName]);

  useEffect(() => {
    if (student) setSearchName(student.name);
  }, [student]);

  async function handleSubmit(data, { resetForm }) {
    try {
      const newEnrollment = {
        student_id: data.student_id,
        plan_id: data.plan_id,
        start_date: data.start_date
      };

      await api.post("/enrollments", newEnrollment);

      toast.success("Matrícula cadastrada com sucesso!");

      resetForm();
    } catch (err) {
      toast.error("Erro ao cadastrar a matrícula. Verifique os dados.");
    }
  }

  return (
    <Container>
      <header>
        <h1>Cadastro de matrícula</h1>
        <div>
          <Link className="voltar" to="/enrollments">
            <MdArrowBack size={22} color="#FFF" />
            <span>Voltar</span>
          </Link>
        </div>
      </header>
      <Content>
        <Form schema={schema} initialData={null} onSubmit={handleSubmit}>
          <div className="row">
            <div className="coluna">
              <Input label="Aluno" name="student_id" type="text" />

              <Input
                name="studentName"
                label="ALUNO"
                placeholder="Buscar aluno"
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
              />
              <Students visible={showStudentList}>
                {estudantes.map(s => (
                  <button
                    className="student"
                    type="button"
                    onClick={() => handleStudentSelect(s)}
                    key={s.id}
                  >
                    {s.name}
                  </button>
                ))}
              </Students>
            </div>
          </div>

          <div className="row">
            <div className="coluna">
              <Select
                name="plan_id"
                label="PLANO"
                options={plans}
                select={plan}
                onChange={e => handleChangePlan(e)}
                placeholder="Selecione o plano"
              />
            </div>
            <div className="coluna">
              <Input
                label="Data de início"
                name="start_date"
                type="text"
                disabled
                step="0.01"
              />
            </div>
            <div className="coluna">
              <Input
                label="Data de término"
                name="end_date"
                type="number"
                disabled
                step="0.01"
              />
            </div>
            <div className="coluna">
              <Input
                label="Valor final"
                name="total"
                type="number"
                disabled
                step="0.01"
              />
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
