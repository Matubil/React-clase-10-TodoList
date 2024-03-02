import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import ListaDeTareas from './containers/ListaDeTareas';
import todoListStore from './store/todoListStore';
import { Provider } from 'react-redux';
import InputConBoton from './components/InputConBoton';
import AgregarTarea from './containers/AgregarTarea';

function App() {

  const centrarHijos ={
    //NO HACEN NADA ESTOS ESTILOS, LOS DECLARO EL PROFE PERO NO SIRVE, NO HACE NADA
    //LO DEJO PARA TENER EL CODIGO PARECIDO
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // height:"100%"
  }

  return (
    <Provider store={todoListStore}>      
      <div style={{height:"100vh"}}>
        <Bs.Alert variant="info" className="text-center">
          <h1>Revisitando la TodoList con Redux</h1>
        </Bs.Alert>
        <Bs.Container style={centrarHijos}>
          <ListaDeTareas/>
          {/* <InputConBoton placeholder={"Ingrese una tarea nueva"}
          textoBoton={"+"}
          onAccion={(n)=>{alert(n)}}
          /> */}
          <AgregarTarea/>
        </Bs.Container>
      </div>
    </Provider>
  );
}

export default App;
