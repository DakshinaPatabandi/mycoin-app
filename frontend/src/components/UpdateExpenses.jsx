import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateExpenses() {
    const [method, setMethod] = useState('')
    const [cost, setCost] = useState('')
    const {id} =useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8801/UpdateExpenses/'+id, {method, cost})
        .then(res =>{
            console.log(res);
            navigate('/Expences');
        }).catch(err => console.log(err));
    }
  return (
    // <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    //     <div className='w-50 bg=white rounded p-3'>

        <div className="flex-container-accountHome vh-50">
          <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">

            <form onSubmit={handleSubmit}>
                <h2>Update Your Expenses method</h2>
                <div className='mb-2'>
                    <label htmlFor="">Method</label>
                    <input type="text" placeholder='Enter Method' className='form-control'
                    onChange={e => setMethod(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Cost</label>
                    <input type="int" placeholder='Enter Cost' className='form-control'
                    onChange={e => setCost(e.target.value)} />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>   
    </div>

    </div>
  )
}

export default UpdateExpenses