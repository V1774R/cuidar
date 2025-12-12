import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Contexto } from "../../context";

const MenuSup = styled.nav`
  background-color: var(--azul2);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100vw;
  height: calc(100dvh - 64px - 30px);
  position: absolute;
  right: 0;
  color: #fff;
  transition: 1s;
  z-index: 10;
`;

const MenuItem = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    background-color: #34495e;
  }
`;

export const MenuSuperior = () => {
  const { state, dispatch } = useContext(Contexto)
  const navigate = useNavigate()

  return (
    <MenuSup style={{ top: state.visibilidadeMenu ? "calc(64px + 30px)" : "-101vh" }} onClick={() => { dispatch({ type: "ALTERNAR_MENU_SUPERIOR" }) }}>
      <MenuItem className="disable" to="/" >👤 Perfil do Usuário</MenuItem>
      <MenuItem className="disable" to="/" >📚 Gestão Escolar</MenuItem>
      <MenuItem className="disable" to="/" >🚨 Emergência</MenuItem>
      <MenuItem className="disable" to="/" >⚙️ Configurações</MenuItem>
      <MenuItem className="disable" to="/" >ℹ️ Ajuda e Suporte</MenuItem>
      <MenuItem onClick={() => {dispatch({ type: "SAIR" })}}>↩️ Sair </MenuItem>
    </MenuSup>
  );
};
