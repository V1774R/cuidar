import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-VariableFont_wght.ttf');
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  :root {
    --fundo: linear-gradient(#8ea7be, #dcefff);
    --azul: #0c345a;
    --azul2: #4c78a1;
    --texto: #092947;
    --texto2: #f5f5f5;

  }
  html, body {
    height: 100dvh;
    overflow: hidden; /* remove a rolagem */
    background: var(--fundo);
  }

  main{
    padding: 16px;
    height: calc(100dvh - 64px - 64px - 48px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: auto;
  }

  .disable{
    opacity: 0.2;
  }
`;
