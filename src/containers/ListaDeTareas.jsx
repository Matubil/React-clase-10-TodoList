import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Lista from "../components/Lista";
import crearAccion from "../actions/action-creators";
import Swal from "sweetalert2";


const ListaDeTareas = () => {

    let dispatch = useDispatch();
    let tareas = useSelector(state => state.tareas)


    return (
        <Lista
            titulo="Mis Tareas"
            items={tareas}
            renderAccionItem={(id) => (

                <Bs.Button variant="danger" onClick={() => {
                    Swal.fire({
                        title: 'Estas seguro?',
                        text: "Confirme para eliminar la tarea",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, eliminar!'
                    }).then((result) => {
                        //en vez de poner el if se podria poner lo de abajo
                        // let accion = crearAccion.eliminarTarea(id);                        
                        // responsivePropType.isConfirmed && dispatch(accion);
                        if (result.isConfirmed) {
                            let accion = crearAccion.eliminarTarea(id);
                            dispatch(accion);
                            Swal.fire(
                                'Eliminado!',
                                'Tu tarea ha sido eliminada.',
                                'success'
                            )
                        }
                    })
                }}>
                    Eliminar
                </Bs.Button>

            )}
        />)
}

export default ListaDeTareas;