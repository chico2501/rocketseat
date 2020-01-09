import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { signOut } from "../../store/modules/auth/actions";

import { Container, Content, Profile } from "./styles";

import logo from "../../assets/logo_h.svg";

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <NavLink to="/students">Alunos</NavLink>
          <NavLink to="/plans">Planos</NavLink>
          <NavLink to="/enrollments">Matrículas</NavLink>
          <NavLink to="/help-orders">Pedidos de auxílio</NavLink>
        </nav>
        <aside>
          <Profile>
            <strong>Nome</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
