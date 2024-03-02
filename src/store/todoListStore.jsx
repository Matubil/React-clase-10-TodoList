import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";

export default configureStore({
    reducer: reducer,
    preloadedState : {
        tareas: [
            {id:1, nombre:"Aprender React Native", done:false},
            {id:2, nombre:"Conquistar el Mundo", done:false},
            {id:3, nombre:"Limpiar la casa", done:false}
        ]
    }
})