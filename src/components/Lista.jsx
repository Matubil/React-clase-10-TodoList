import "bootstrap/dist/css/bootstrap.css";
//IMPORTA DE ESTA FORMA PARA QUE CUANDO PONGA Bs. le ponga cualquiera de los componentes de react-bootstrap
import * as Bs from "react-bootstrap";

//usamos render por algo llamado render props de react
const Lista = ({titulo, items, renderAccionItem }) => {
    return (
        <Bs.ListGroup className="w-100">
            <Bs.ListGroupItem active={true}>
                {titulo}
            </Bs.ListGroupItem>
            {
                items.map((item)=>(
                    <Bs.ListGroupItem key={item.id}>
                        {item.nombre}

                        {
                            renderAccionItem && <div className="float-end">
                                    {renderAccionItem(item.id)}
                                </div>
                        }
                    </Bs.ListGroupItem>
                ))
            }
        </Bs.ListGroup>
    );

}

export default Lista;