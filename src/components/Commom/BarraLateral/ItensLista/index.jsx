import styled from "styled-components"
import { useState } from "react";

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 100%;
    font-size: 1.3rem;
`

const ItensLista = ({ children, iconeAtivo, iconeInativo}) => {

    const [ativaLink, setAtivaLink] = useState(false);
    const estiloLinks =  ativaLink ? '#7B78E5': ' #FFFFFF';

    function ativaToggle() {
       return setAtivaLink(!ativaLink);
    }
    
    return(
        <Item onClick={ativaToggle} style={{ color:estiloLinks}}>
            <img src={ ativaLink ? iconeAtivo : iconeInativo } alt="" />
            {children}
        </Item>
    )
}

export default ItensLista;