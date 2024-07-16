import styled from "styled-components";
import ItensLista from "./ItensLista";

const Aside = styled.aside`

    width: 220px;

    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
`

const BarraLateral = ()=> {
    return(
        <Aside>
            <ul>
                <ItensLista
                    iconeAtivo='/icones/home-ativo.png'
                    iconeInativo='/icones/home-inativo.png'
                >
                    Inicio
                </ItensLista>
                <ItensLista
                    iconeAtivo='/icones/mais-vistas-active.png'
                    iconeInativo='/icones/mais-vistas-inativo.png'
                >
                    Mais Vistas
                </ItensLista>
                <ItensLista
                    iconeAtivo='/icones/mais-curtidas-ativo.png'
                    iconeInativo='/icones/mais-curtidas-inativo.png'
                >
                    Mais Curtidas
                </ItensLista>
            </ul>
        </Aside>
    )
}

export default BarraLateral;