import { getApp } from 'firebase/app';
import React, {useState} from 'react';

import { toast } from 'react-toastify';

import './EventAdd.css'

const initialState = {
  name:"",
  performer:"",
  venue:"",
  date:"",
  time:"",
  description:"",
};


const EventAdd = () => {
  
 
  const [state, setState] = useState(initialState);
  const [data,setData] = useState({});
  
  const {name, performer, venue, date, time, description} = state
  

  const handleAddSubmit = (e) =>{
    e.preventDefault();
    if(!name|| !performer|| !venue|| !date|| !time|| !description){
      toast.error("Please provide value in each field")
    }else {
      getApp.child("events").push(state, (err) => {
          if(err){
            toast.error(err);
          }else{
            toast.success("Event Added Successfully");
          }
      });
     
    }
    
  };

  const onChange = (e) => {
    const {name, value} =e.target;
    setState({...state, [name]: value});
  };

  return (
    <div className="container">
      <form onSubmit={handleAddSubmit} className="main">
        <h1>Event Form</h1>
      <div className='row g-3'>
        <div className="col">
          <label htmlFor="Name" class="form-label">Event Name</label>
          <input 
            name="name" 
            id="name"
            className="form-control"
            type="text" 
            placeholder="Input Details"
            value={name}
            onChange={onChange}
            required="required"/> 
        </div>
        <div className="col">
          <label htmlFor="Name" class="form-label">Event Performer</label>
          <input 
          name="performer"
          id="performer"
          value={performer}
          className="form-control"
          type="text" 
          required="required"
          onChange={onChange}
          placeholder="Type Name"/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputState" class="form-label">Event Venue</label>
        <input 
          name="venue"
          id="venue"
          value={venue}
          className="form-control"
          type="place" 
          required="required"
          onChange={onChange}
          placeholder="Type Name"/>
      </div>
      <div className="row g-3">
          <div className="col-sm-7">
          <label htmlFor="contact ">Event Date</label>
            <input 
            name="date"
            id="date"
            value={date}
            type="date" 
            onChange={onChange}
            class="form-control" 
            required="required"/>
        </div>
        <div className="col-sm">
        <label htmlFor="contact ">Event Time</label>
          <input 
          name="time"
          id="time"
          value={time}
          type="time" 
          onChange={onChange}
          class="form-control"  
          required="required"/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput" class="form-label">Description</label>
            <textarea
            name="description"
            id="description"
            value={description}
            type="text" 
            rows="4"
            class="form-control" 
            onChange={onChange}
            required="required" />
      </div>
      </div>
      <div className="add-button ">
      <button className="btn btn-primary" type="submit" >Add Event</button>{' '}
      <button className="btn btn-secondary" type="submit">Cancel</button>
      </div> 
      </form>   
    </div>
  );
}

export default EventAdd
