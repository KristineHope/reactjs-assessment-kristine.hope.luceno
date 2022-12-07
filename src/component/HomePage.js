import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {

  const navigate = useNavigate();

function handleClick (){

  navigate('/eventadd')
}

  return (
    <div>
      <div className="header text-center">
        <h3 className="text-white">Start plan your Event</h3>
        <button type="button" class="btn btn-outline-warning mt-3" data-mdb-ripple-color="dark" onClick={handleClick}>Create Event</button>
    </div>
    </div>
  )
}

export default HomePage
