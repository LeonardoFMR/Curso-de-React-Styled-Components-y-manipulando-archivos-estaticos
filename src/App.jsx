import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera/Cabecera"
import BarraLateral from "./components/BarraLateral/BarraLateral"
import Banner from "./components/Banner/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom/ModalZoom"
import Pie from "./components/Pie/Pie"

const FondoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`
const AppContainer = styled.div`
width: 1280px;
min-height: 100vh;
margin: 0 auto;
`
const MainContainer = styled.main`
display: flex;
gap: 24px;
`
const ContenidoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`


const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita
      })
    }
    setFotosDeGaleria(fotosDeGaleria.map(fotosDeGaleria => {
      return {
        ...fotosDeGaleria,
        favorita: fotosDeGaleria.id === foto.id ? !foto.favorita : fotosDeGaleria.favorita
      }
    }))
  }


  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria >
              <Banner texto="La galería más completa de fotos del espacio"
                backgroundImage={banner} />

              <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                fotos={fotosDeGaleria}
                alAlternarFavorito={alAlternarFavorito} />
            </ContenidoGaleria >
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito} />
    
      <Pie/>
      </FondoGradiente>
    </>
  )
}

export default App
