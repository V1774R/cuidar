import { useContext, useState } from "react";
import styled from "styled-components";
import { Contexto } from "../../context";

// 🎨 Estilos minimalistas e modernos
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p{
    width: 95%;
    text-align: justify;
    margin: auto;

  }
`;

const Label = styled.label`
  font-weight: 600;
  color: #222;
  margin-bottom: 6px;
  display: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 15px;
  transition: border-color 0.3s ease;
    border-radius: 8px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 14px;
  background: var(--azul);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 15px rgba(0, 123, 255, 0.3);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  margin-top: -10px;
`;

// 🧑‍💻 Componente
export const LoginForm = () => {
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")
  const [errors, setErrors] = useState({})
  const { state, dispatch } = useContext(Contexto)

  const validar = () => {
    const newErrors = {}

    // if (!cpf) {
    //   newErrors.cpf = "CPF é obrigatório"
    // } else if (!/^\d{11}$/.test(cpf)) {
    //   newErrors.cpf = "CPF deve conter 11 números"
    // }

    if(!cpf){
      newErrors.cpf = "Matrícula é obrigatória."
    }

    if (!senha) {
      newErrors.senha = "Senha é obrigatória"
    } else if (senha.length < 6) {
      newErrors.senha = "Senha deve ter pelo menos 6 caracteres"
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validar()) {
      const dados = { cpf, senha }
      dispatch({ type: "VALIDAR", payload: dados })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
            <p>Esse sistema está sendo desenvolvido inicialmente para aparelhos móveis. Recomenda-se que seja testado em celulares ou tablets.</p>
      <div>
        <Label>CPF:</Label>
        <Input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Matrícula"
        />
        {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
      </div>

      <div>
        <Label>Senha:</Label>
        <Input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />
        {errors.senha && <ErrorMessage>{errors.senha}</ErrorMessage>}
      </div>

      <Button type="submit">Entrar</Button>


    </Form>
  )
}
