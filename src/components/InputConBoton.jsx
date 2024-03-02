import "bootstrap/dist/css/bootstrap.css";
import * as Bs from "react-bootstrap";
import { useState } from "react";

const InputConBoton = ({ placeholder, textoBoton, onAccion }) => {

    const [value, setValue] = useState("");

    return (
        <Bs.InputGroup>
            <Bs.FormControl placeholder={placeholder}
                value={value}
                onChange={(evt) => { setValue(evt.target.value) }}
            />
            <Bs.Button className="btn-outline.primary" variant="success"
                onClick={() => { 
                    //se pone la siguiente condicion para que si el value es vacio no se ejecute la accion
                    value && onAccion(value)
                    //y que si se ejecuta que lo ponga en vacio
                        setValue("")}}
            >
                {textoBoton}
            </Bs.Button>
        </Bs.InputGroup>
    );
}

export default InputConBoton;