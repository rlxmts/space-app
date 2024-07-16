import styled from "styled-components";

const Campo = styled.input`
    padding: 1rem;
    width: 100%;
    background: transparent;
    border: 1px solid #C98CF1;
    color: #FFFFFF;
    outline: none;
    border-radius: 10px;   

    &::placeholder{
        color: #FFFFFF;
    }

`

const BoxCampo = styled.div`
    max-width: 500px;
    width: 100%;
    position: relative;

    &::after{
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        background-image: url('/lupa.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
`

const CampoDeBusca = ()=> {
    return(
        <BoxCampo>
            <Campo type="text" placeholder="O que você procura?" />
        </BoxCampo>
    )   
}

export default CampoDeBusca;