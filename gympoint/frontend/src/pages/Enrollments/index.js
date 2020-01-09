import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAddBox, MdArrowBack, MdCheck } from "react-icons/md";
import { toast } from "react-toastify";

import api from "../../services/api";

import { Container, Content } from "../_layouts/default/styles";

export default function Enrollments() {
  const [matriculas, setMatriculas] = useState([]);

  async function loadEnrollments() {
    const response = await api.get("/enrollments");

    const enrollments = response.data;

    setMatriculas(enrollments);
  }

  async function handleDelete(id) {
    const confirmacao = window.confirm("Tem certeza que deseja excluir?");

    if (confirmacao) {
      try {
        await api.delete(`/enrollments/${id}`);

        toast.success("Matrícula excluída com sucesso!");
      } catch (err) {
        toast.erro("Erro ao excluir a matrícula!");
      }
    }
  }
  loadEnrollments();

  return (
    <Container>
      <header>
        <h1>Gerenciando matrículas</h1>
        <div>
          <Link className="add" to="/new-enrollment">
            <MdAddBox size={22} color="#FFF" />
            <span>Cadastrar</span>
          </Link>
        </div>
      </header>
      <Content>
        <table>
          <thead>
            <tr>
              <td>Aluno</td>
              <td>Plano</td>
              <td>Início</td>
              <td>Término</td>
              <td>Ativa</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {matriculas.map(matricula => (
              <tr key={matricula.id}>
                <td>{matricula.student.name}</td>
                <td>{matricula.plan.title}</td>
                <td>{matricula.date_formatted.start_date}</td>
                <td>{matricula.date_formatted.end_date}</td>
                <td>
                  {matricula.active && <MdCheck size={22} color="#CC0" />}
                </td>
                <td>
                  <div>
                    <Link
                      to={{
                        pathname: "/edit-enrollment",
                        state: { matricula }
                      }}
                    >
                      editar
                    </Link>
                    <button onClick={() => handleDelete(matricula.id)}>
                      apagar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
