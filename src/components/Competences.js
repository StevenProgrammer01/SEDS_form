import React from "react";
//import {Form} from "./Form"
import { Form } from "./Form";
export const Competences =()=>{



    return(
        <>
            <div className="container p-5 my-5 bg-dark text-white text-center rounded-pill w-50">
                <h1 className="h1">Competencias</h1>
            </div>
            <Form field = "competences"/>
        </>
    );
}