import React, {useState} from "react";
const API = process.env.REACT_APP_BACK;
export const Form=()=>{
    const [data, setData] = useState(
        {
            name : "",
            general_info:"",
            date:"",
            requirements:"",
            source: "",
            state:"",
            cost:"",
            attendance:"",
            mode:"",
            language:""
        }

    );
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const res = await fetch(`${API}/competences`,{
            headers: {
                "Content-type":"application/json"
            }, 
            method: "POST", 
            body:JSON.stringify(data)
        })


    };
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]: value});
    };
    return(
        <div className="container p-4 ">
            <form className="card card-body" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3 mt-3">
                            
                            <label htmlFor="name" className="form-label">Nombre:</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name = "name"
                            placeholder="Enter name"
                            value = {data.name} 
                            onChange= {handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="general_info">Info General:</label>
                            <textarea 
                            className="form-control" 
                            rows="5" 
                            id="general_info" 
                            name="g_info"
                            value = {data.g_info}
                            onChange= {handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="date" className="form-label">Fecha:</label>
                            <input 
                            type="date" 
                            className="form-control" 
                            id="date" 
                            placeholder="Enter date" 
                            name="date"
                            value={data.date}
                            onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="requirements">Requisitos:</label>
                            <textarea 
                            className="form-control" 
                            rows="5" 
                            id="requirements" 
                            name="requirements"
                            value={data.requirements}
                            onChange={handleChange}></textarea>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor= "state" className="form-label">Estado:</label>
                            <select id = "state" name = "state" className="form-select"
                            value={data.active} onChange={handleChange} >
                                <option>Seleccione una opción</option>
                                <option value="Activo">Activo</option>
                                <option value= "Inactivo">Inactivo</option>
                            </select>

                        </div>
                
                        
                        

                    </div>
                    <div className="col-md-5">
                        <div className="mb-3 mt-3">
                            <label htmlFor="src" className="form-label">Source:</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="src" 
                            placeholder="Enter source: http://..." 
                            name="source"
                            value={data.source}
                            onChange={handleChange}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor= "cost" className="form-label">Costo:</label>
                            <select id = "cost" name = "cost" className="form-select"
                            value={data.cost} onChange={handleChange} >
                                <option>Seleccione una opción</option>
                                <option value="Gratuito">Gratuito</option>
                                <option value= "Con Costo">Con Costo</option>
                                <option value="Parcial">Parcial</option>
                            </select>

                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor= "attendance" className="form-label">Asistencia:</label>
                            <select id = "attendance" className="form-select"  name= "attendance"
                            value={data.attendance} onChange={handleChange}>
                                <option>Seleccione una opción</option>
                                <option value= "Virtual">Virtual</option>
                                <option value= "Prescencial">Prescencial</option>
                                <option value= "Mixto">Mixto</option>
                                <option value= "Electivo">Electivo</option>
                            </select>

                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor= "mode" className="form-label">Participación:</label>
                            <select id = "mode" className="form-select"  name= "mode"
                            value={data.mode} onChange={handleChange}>
                                <option>Seleccione una opción</option>
                                <option value= "Individual">Individual</option>
                                <option value= "Equipo">Equipo</option>
                                <option value= "Electivo">Electivo</option>
                            </select>

                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor= "lang" className="form-label">Language:</label>
                            <select id = "lang" className="form-select"  name= "language"
                            value={data.language} onChange={handleChange}>
                                <option>Seleccione una opción</option>
                                <option value= "Inglés">Inglés</option>
                                <option value= "Español">Español</option>
                                <option value= "Otro">Otro</option>
                                <option value= "Electivo">Electivo</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </div>
                
                
            </form>

        </div>
        
    )
    
}