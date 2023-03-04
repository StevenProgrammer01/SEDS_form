import React, {useState,useEffect} from "react";
const API = process.env.REACT_APP_BACK;

export const Table= () =>{
    const [competences, setCompetences] = useState([]);
    const getUsers= async () =>{
        const res = await fetch(`${API}/competences`)
        const data = await res.json()
        setCompetences(data);
        
    }
    useEffect(()=>{
        getUsers();

    },[])
    return(
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
                            <th>Operations</th>
                        </tr>

                    </thead>
                    <tbody>
                        {competences.map(competence=>(
                            
                            <tr key = {competence._id}>
                                <td>{competence.name}</td>
                                <td>{competence.general_info}</td>
                                <td>{competence.date}</td>
                                <td>{competence.requirements}</td>
                                <td>{competence.source}</td>
                                <td>{competence.state}</td>
                                <td>{competence.cost}</td>
                                <td>{competence.attendance}</td>
                                <td>{competence.mode}</td>
                                <td>{competence.language}</td>
                                <td>
                                    <button className="btn btn-secondary btn-sm btn-block">
                                        Edit
                                    </button>
                                    <button className="btn btn-danger btn-sm btn-block">
                                        Delete
                                    </button>
                                </td>
                                

                            </tr>
                        ))}

                    </tbody>
                        
                </table>
            </div>

        </div>
        
        

    );





}