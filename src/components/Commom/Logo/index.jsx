import styled from "styled-components";

const Imagem = styled.img`
    max-width: 210px;
    cursor: pointer;
`

const Logo = ()=> {
    return(
        <Imagem src="/logo.png" alt="Logotipo Space-App"/>
    )
}

export default Logo;