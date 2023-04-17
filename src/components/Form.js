import React, {useState, useEffect} from "react";
const API = process.env.REACT_APP_BACK;
export const Form=()=>{
    const [data2, setData2] = useState(
        {
            id:"",
            name : "",
            general_info:"",
            dates:"",
            requirements:"",
            source: "",
            active:"",
            cost:"",
            attendance:"",
            participation:"",
            language:"",
            url_image:""
        }

    );
    const [data, setData] = useState(
        {
            name : "",
            general_info:"",
            dates:"",
            requirements:"",
            source: "",
            active:"",
            cost:"",
            attendance:"",
            participation:"",
            language:"",
            url_image:""
        }

    );
    const [competences, setCompetences] = useState([]);
    const getCompetences= async () =>{
        const res = await fetch(`${API}/`);
        const data = await res.json()
        console.log(data)
        setCompetences(data);
        
    }
    useEffect(()=>{
        getCompetences();
    },[]);
    const [editing, setEditing] = useState(false);
    const [id, setId] = useState("");



    const editUser=async(id)=>{
        window.alert("Now you can edit your competence register");
        console.log(id)
        setEditing(true);
        setId(id);
        
        const res = await fetch(`${API}/`,{
        });
        const response = await res.json();
        console.log(response[0])
        setData({
            name : response[0].name,
            general_info:response[0].general_info,
            dates:response[0].dates,
            requirements:response[0].requirements,
            source: response[0].source,
            active:response[0].active,
            cost:response[0].cost,
            attendance:response[0].attendance,
            participation:response[0].participation,
            language:response[0].language,
            url_image:response[0].url_image
        });
        //window.alert("Now you can edit the spaces of your competence register");

    }
    const deleteUser=async(id)=>{
        const userResponse = window.confirm("Are you sure of delete this competence?")

        if (userResponse){
            const res = await fetch(`${API}/${id}`,{
                method: "DELETE"
            });
            const response = await res.json();
            console.log(response);
            await getCompetences();
        }
        

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        //TODO: Hacer que funcione PUT con el API
        data2.id = id
        if (!editing){
            //window.alert("No estoy editing");
            const res = await fetch(`${API}/`,{
                headers: {
                    "Content-type":"application/json"
                }, 
                method: "POST", 
                body:JSON.stringify(data)
            })
            const response = await res.json();
            console.log(response);
        }else{
            //window.alert("Editing");
            setData2(data)
            console.log(data2)
            const res = await fetch(`${API}/`, {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                }, 
                body:JSON.stringify(data2)
            });
            const response = await res.json();
            console.log(response);
            setEditing(false)
            setId("");

        }
        await getCompetences();
        setData({
            name : "",
            general_info:"",
            dates:"",
            requirements:"",
            source: "",
            state:"",
            cost:"",
            attendance:"",
            participation:"",
            language:"",
            url_image:""
        })

        
        


    };
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]: value});
    };
    return(
        <>
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
                                name="general_info"
                                value = {data.general_info}
                                onChange= {handleChange}
                                ></textarea>
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="dates" className="form-label">Fecha:</label>
                                <input 
                                type="date" 
                                className="form-control" 
                                id="dates" 
                                placeholder="Enter date" 
                                name="dates"
                                value={data.dates}
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
                                <label htmlFor= "active" className="form-label">Estado:</label>
                                <select id = "active" name = "active" className="form-select"
                                value={data.active} onChange={handleChange} >
                                    <option value=" ">Seleccione una opción</option>
                                    <option value="Activo">Activo</option>
                                    <option value= "Inactivo">Inactivo</option>
                                </select>

                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mb-3 mt-3">
                                <label htmlFor="source" className="form-label">Source:</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="source" 
                                placeholder="Enter source: http://..." 
                                name="source"
                                value={data.source}
                                onChange={handleChange}/>
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="url_image" className="form-label">URL_Image:</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="url_image" 
                                placeholder="Enter source: http://..." 
                                name="url_image"
                                value={data.url_image}
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
                                <label htmlFor= "participation" className="form-label">Participación:</label>
                                <select id = "participation" className="form-select"  name= "participation"
                                value={data.participation} onChange={handleChange}>
                                    <option>Seleccione una opción</option>
                                    <option value= "Individual">Individual</option>
                                    <option value= "Equipo">Equipo</option>
                                    <option value= "Electivo">Electivo</option>
                                </select>

                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor= "language" className="form-label">Language:</label>
                                <select id = "language" className="form-select"  name= "language"
                                value={data.language} onChange={handleChange}>
                                    <option>Seleccione una opción</option>
                                    <option value= "Inglés">Inglés</option>
                                    <option value= "Español">Español</option>
                                    <option value= "Otro">Otro</option>
                                    <option value= "Electivo">Electivo</option>
                                </select>
                            </div>
                            <button type="submit" className={editing?"btn btn-primary":"btn btn-secondary"}>
                                {editing?"Update":"Create"}
                            </button>
                        </div>

                    </div>
                    
                    
                </form>

            </div>
                <div className="container p-4">
                <div className="col md-8">
                    <table className="table table-stripped">
                        <thead>
                            <tr >
                                <th>Name</th>
                                <th>G_info</th>
                                <th>Date</th>
                                <th>Requirements</th>
                                <th>Source</th>
                                <th>Status</th>
                                <th>Cost</th>
                                <th>Attendance</th>
                                <th>Mode</th>
                                <th>Language</th>
                                <th>Image</th>
                                <th>Operations</th>
                            </tr>

                        </thead>
                        <tbody>
                            {competences.map(competence=>(
                                
                                <tr key = {competence.id}>
                                    <td>{competence.name}</td>
                                    <td>{competence.general_info}</td>
                                    <td>{competence.dates}</td>
                                    <td>{competence.requirements}</td>
                                    <td>{competence.source}</td>
                                    <td>{competence.active}</td>
                                    <td>{competence.cost}</td>
                                    <td>{competence.attendance}</td>
                                    <td>{competence.participation}</td>
                                    <td>{competence.language}</td>
                                    <td>{competence.url_image}</td>
                                    <td>
                                        <button className="btn btn-secondary btn-sm btn-block"
                                        onClick={(e)=>editUser(competence.id)}
                                        Delete>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm btn-block"
                                        onClick={(e)=>deleteUser(competence.id)}>
                                            Delete
                                        </button>
                                    </td>
                                    

                                </tr>
                            ))}

                        </tbody>
                            
                    </table>
                </div>

            </div>
    
        </>
               
    )
    
}