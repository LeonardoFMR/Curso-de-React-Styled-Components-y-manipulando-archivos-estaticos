import styled from "styled-components"
import Titulo from "../Titulo/Titulo"
import Populares from "./Populares/Populares"
import Tags from "./Tags/Tags"
import Imagen from "./Imagen/Imagen"
import Cargando from "../Cargando/Cargando"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"


const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`
const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 24px;
`

const Galeria = () => {
    //const { consulta, fotosDeGaleria, alAlternarFavorito, setFotoSeleccionada } = useContext(GlobalContext);
    const { state, dispatch } = useContext(GlobalContext);


    return (
        state.fotosDeGaleria.length == 0 ?
            <Cargando ></Cargando > :
            <>
                <Tags />
                <GaleriaContainer>
                    <SeccionFluida>
                        <Titulo>Navegue por la galería</Titulo>
                        <ImagenesContainer>
                            {state.fotosDeGaleria.filter(foto => {
                                return (state.consulta === '' || (state.consulta && foto.titulo &&
                                    foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                                        .includes(state.consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))))
                            })
                                .map(foto => <Imagen
                                    key={foto.id}
                                    foto={foto} />)
                            }

                        </ImagenesContainer>
                    </SeccionFluida>
                    <Populares />

                </GaleriaContainer>
            </>
    )
}

export default Galeria

