import { useContext } from "react";
import { GlobalContext } from "../../src/context/GlobalContext";

function useFotoModal() {
    const { state, dispatch } = useContext(GlobalContext);

    const abrirModal = (foto) => {
        console.log("abrirModal llamado con foto:", foto);
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: foto });
    };

    const cerrarModal = () => {
        console.log("cerrarModal llamado");
        dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: null });
    };

    const fotoSeleccionada = state.fotoSeleccionada;
    const estaAbiertoModal = state.modalAbierto;

    console.log("estado en useFotoModal:", { fotoSeleccionada, estaAbiertoModal });

    return { fotoSeleccionada, estaAbiertoModal, abrirModal, cerrarModal };
}

export default useFotoModal;
