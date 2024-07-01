import styled from "styled-components"
import CampoTexto from "../Campotexto/Campotexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    img {
        width: 212px;
    }
    
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src="img/logo.jpeg" alt="Logo de Space App" />
        <CampoTexto />
    </HeaderEstilizado>

}

export default Cabecera