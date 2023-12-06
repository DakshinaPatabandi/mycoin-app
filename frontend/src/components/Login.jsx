import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'

function Login() {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8801/login', values)
            .then(res => {
                if (res.data.status === "Success") {
                    navigate(`/TomatoHunt?username=${res.data.username}`)
                } else {
                    alert('No record found')
                }
            })
            .catch(err => console.log(err))

    }



    return (
        <>
            <h1 className="topic mt-5">Welcome to Tomato Hunt</h1>
            <div className="container pt-5 justify-content-center align-items-center d-flex  ">
                <div className="mt-1 justify-content-center align-items-center rounded-2 p-5 formbox">
                    <h2>Log In</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label className="form-label"><strong>Your name</strong></label>
                            <input
                                type="text"
                                required
                                name="username"
                                class="form-control rounded-0"
                                placeholder="User Name"
                                onChange={handleInput}
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label color-white"><strong>Password</strong></label>
                            <input
                                type="password"
                                required
                                name="password"
                                class="form-control rounded-0"
                                placeholder="Password"
                                onChange={handleInput}
                            />
                        </div>


                        <button type="submit" className="btn btn-success">Log In</button>
                        <p></p>

                        <p><strong>Don't have a account? Create new account</strong></p>
                        <NavLink to='/Signup' className='btn btn-primary d-block'><strong>Create Account</strong></NavLink><br></br>

                        <NavLink to='/' className='mt-3 btn-homelogin btn btn-primary border'><strong>Home</strong></NavLink>

                    </form>
                </div>

            </div>
        </>

    )

}

export default Login

