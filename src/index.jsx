import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";

function Array() {

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    return (
        <div>
            <ul style={{marginTop : "30px"}}>
                {products.map((product) => {

                    return (

                        <li style={{ color: (product.isFruit === true) ? 'purple' : 'green', listStyle: "none", fontSize : "24px" }}>

                            {product.id + ".  " + product.title + " " + ((product.title === "Apple") ? "----- is fruit" : "-----    is not fruit")}

                        </li>

                    )

                })}
            </ul>


        </div>
    )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Array />)