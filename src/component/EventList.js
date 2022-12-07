import { getApp } from 'firebase/app';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const EventList = () => {
    const   [data, setData] = useState({});

    useEffect(() =>{
        getApp.child("event").on("value", (snapshot) => {
            if (snapshot.val() !==null) {
                setData({...snapshot.val()});
            }else {
                setData({});
            }
        });

        return() =>{
            setData({});
        };
    },[]);

    const onDelete = (id) =>{
        if (window.confirm("Are you sure you want to delete this event?")){
            getApp.child('event/$(id)').remove((err)=>{
                if(err){
                    toast.error(err)
                }else{
                    toast.success("Event Delete Successfully!");
                }
            });
        }
    }

    return (
    <div style={{marginTop: "100px"}}>
        <table className="style-table">
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Event Name</th>
                    <th style={{textAlign:"center"}}>Event Performer</th>
                    <th style={{textAlign:"center"}}>Event Venue</th>
                    <th style={{textAlign:"center"}}>Event Date</th>
                    <th style={{textAlign:"center"}}>Event Time</th>
                    <th style={{textAlign:"center"}}>Event Description</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map((id, index) =>{
                    return(
                        <tr key={id}>
                            <th scope="row">{index +1}</th>
                            <td>{data[id].name}</td>
                            <td>{data[id].performer}</td>
                            <td>{data[id].venue}</td>
                            <td>{data[id].date}</td>
                            <td>{data[id].time}</td>
                            <td>{data[id].description}</td>
                            <td>
                                <Link to={'/eventadd/${id}'}>
                                    <button className="btn btn-edit">Edit</button>
                                </Link>
                                <Link>
                                    <button className="btn btn-edit" onClick={() => {onDelete(id)}}>Delete</button>
                                </Link>
                                
                                
                            </td>
                        </tr>

                    )
                })}
            </tbody>
        </table>
      
    </div>
  )
}

export default EventList
