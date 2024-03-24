import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateIncome() {
    const [source, setSource] = useState('')
    const [income, setIncome] = useState('')
    const {id} =useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8801/UpdateIncome/'+id, {source, income})
        .then(res =>{
            console.log(res);
            navigate('/Income');
        }).catch(err => console.log(err));
    }
  return (
    // <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    //     <div className='w-50 bg=white rounded p-3'>

        <div className="flex-container-accountHome vh-50">
          <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">

            <form onSubmit={handleSubmit}>
                <h2>Update Your Income Sources</h2>
                <div className='mb-2'>
                    <label htmlFor="">Source</label>
                    <input type="text" placeholder='Enter Source' className='form-control'
                    onChange={e => setSource(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Income</label>
                    <input type="int" placeholder='Enter Income' className='form-control'
                    onChange={e => setIncome(e.target.value)} />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>   
    </div>

    </div>
  )
}

export default UpdateIncome