import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdAddBox, MdSearch } from "react-icons/md";
import { toast } from "react-toastify";

import api from "../../services/api";

import { Container, Content } from "../_layouts/default/styles";

export default function Students() {
  const [estudantes, setEstudantes] = useState([]);
  const [nomeEstudante, setNomeEstudante] = useState();

  useEffect(() => {
    async function loadStudents(estudante = "") {
      console.log(estudante);
      const response =
        estudante === ""
          ? await api.get("/students")
          : await api.get(`/students/?=${estudante}`);

      setEstudantes(response.data);
    }
    loadStudents();
  }, []);

  async function handleDelete(id) {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir? A sua matrícula será excluída também."
    );

    if (confirmacao) {
      try {
        await api.delete(`/students/${id}`);

        toast.success("Aluno excluído com sucesso!");
      } catch (err) {
        toast.erro("Erro ao excluir o aluno!");
      }
    }
  }

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <div>
          <Link className="add" to="/new-student">
            <MdAddBox size={22} color="#FFF" />
            <span>Cadastrar</span>
          </Link>

          <div className="busca">
            <MdSearch size={22} color="#999" />
            <input
              value={nomeEstudante}
              placeholder="Buscar aluno"
              onChange={e => setNomeEstudante(e.target.value)}
            />
          </div>
        </div>
      </header>
      <Content>
        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <td>E-mail</td>
              <td>Idade</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {estudantes.map(estudante => (
              <tr key={estudante.id}>
                <td>{estudante.name}</td>
                <td>{estudante.email}</td>
                <td>{estudante.idade}</td>
                <td>
                  <div>
                    <Link
                      to={{ pathname: "/edit-student", state: { estudante } }}
                    >
                      editar
                    </Link>
                    <button onClick={() => handleDelete(estudante.id)}>
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
