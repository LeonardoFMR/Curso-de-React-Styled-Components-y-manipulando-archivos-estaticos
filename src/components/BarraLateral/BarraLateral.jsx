import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion/ItemNavegacion"

const ListaEstilizada = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion iconoActivo="iconos/home-activo.png"
                        iconoInactivo="iconos/home-inactivo.png"
                        activo>
                        Inicio
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo="iconos/mas-vistas-activo.png"
                        iconoInactivo="iconos/mas-vistas-inactivo.png">
                        Más visitados
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo="iconos/me-gusta-activo.png"
                        iconoInactivo="iconos/me-gusta-inactivo.png">
                        Más Me gusta
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo="iconos/nuevas-activo.png"
                        iconoInactivo="iconos/nuevas-inactivo.png">
                        Nuevas
                    </ItemNavegacion>

                    <ItemNavegacion iconoActivo="iconos/sorprendeme-activo.png"
                        iconoInactivo="iconos/sorprendeme-inactivo.png">
                        Sorpréndeme
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>)
}

export default BarraLateral