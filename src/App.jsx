import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera/Cabecera"
import BarraLateral from "./components/BarraLateral/BarraLateral"
import Banner from "./components/Banner/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria/Galeria"
// import fotos from "./fotos.json"
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom/ModalZoom"
import Pie from "./components/Pie/Pie"
import Cargando from "./components/Cargando/Cargando"
import GlobalContextProvider from "./context/GlobalContext"

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

  return (
    <>
      <FondoGradiente >
        <GlobalStyles />
        <GlobalContextProvider >
          <AppContainer>
            <Cabecera />
            <MainContainer>
              <BarraLateral />
              <ContenidoGaleria >
                <Banner texto="La galería más completa de fotos del espacio"
                  backgroundImage={banner} />
                <Galeria />
              </ContenidoGaleria >
            </MainContainer>
          </AppContainer>
          <ModalZoom />

          <Pie />
          </GlobalContextProvider >
      </FondoGradiente>
   
    </>
  )
}

export default App
