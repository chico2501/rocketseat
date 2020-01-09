import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
import { toast } from "react-toastify";

import { Container, Content } from "../_layouts/default/styles";

import api from "../../services/api";

export default function Plans() {
  const [planos, setPlanos] = useState([]);

  async function loadPlans() {
    const response = await api.get("/plans");

    const plans = response.data;

    setPlanos(plans);
  }

  async function handleDelete(id) {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir o plano?"
    );

    if (confirmacao) {
      try {
        await api.delete(`/plans/${id}`);

        toast.success("Plano excluído com sucesso!");
      } catch (err) {
        toast.erro("Erro ao excluir o plano!");
      }
    }
  }

  loadPlans();

  return (
    <Container>
      <header>
        <h1>Gerenciando planos</h1>
        <div>
          <Link className="add" to="/new-plan">
            <MdAddBox size={22} color="#FFF" />
            <span>Cadastrar</span>
          </Link>
        </div>
      </header>
      <Content>
        <table>
          <thead>
            <tr>
              <td>Título</td>
              <td>Duração</td>
              <td>Valor / Mês</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {planos.map(plano => (
              <tr key={plano.title}>
                <td>{plano.title}</td>
                <td>{plano.duration}</td>
                <td>R$ {plano.price}</td>
                <td>
                  <div>
                    <Link to={{ pathname: "/edit-plan", state: { plano } }}>
                      editar
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(plano.id)}
                    >
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
