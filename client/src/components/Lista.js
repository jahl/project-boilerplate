import React, { Component } from "react";


class List extends Component {


    render() {
        return (
            <div>
                {
                    this.props.results.map((element, index) => {
                        return <tr key={element._id}>
                            <td>{element.nombre}</td>
                            <td>{element.medida}</td>
                            <td>{element.precio_unitario}</td>
                            <td>{element.fecha_agregado}</td>
                            <td>{element.flete}</td>
                            <td>{element.fecha_entrega}</td>
                            <td>{element.cantidad_disponible}</td>
                        </tr>;
                    })
                }
            </div>
        );
    }
}

export default List;
