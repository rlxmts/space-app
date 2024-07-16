import styled from "styled-components";
import Cabecalho from "./components/Layout/Cabecalho";
import BarraLateral from "./components/Commom/BarraLateral";

const FundoGradiente = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  padding: 0 1rem;
`

function App() {

  return (
    <FundoGradiente>
      <Cabecalho />
      <BarraLateral />
    </FundoGradiente>
  )
}

export default App
