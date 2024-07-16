import styled from "styled-components";
import Logo from "../../Commom/Logo";
import CampoDeBusca from "../../Commom/CampoDeBusca";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`

const Cabecalho = ()=> {
    return(
        <Header>
            <Logo /> 
            <CampoDeBusca />
        </Header>
    )
}

export default Cabecalho;