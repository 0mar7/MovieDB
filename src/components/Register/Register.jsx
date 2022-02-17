import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'



export default function Register(props) {

    let [loading, setLoading] = useState(false);

    let [errorList, setErrorList] = useState([]);

    let [error, setError] = useState('');

    let [user, setUser] = useState({ first_name: '', last_name: '', age: '', email: '', password: '' });

    function getUser(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        console.log(myUser);
    }

    function valdiationRegisterForm() {

        let scheme = Joi.object({
            first_name: Joi.string().min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            age: Joi.number().min(16).max(80).required(),
            email: Joi.string().email({ tlds: { allow: ['com', 'net', 'org'] } }).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        })

        return scheme.validate(user, { abortEarly: false })
    }

    async function formSubmit(e) {
        e.preventDefault();
        setLoading(true);

        let validationResponse = valdiationRegisterForm();

        if (validationResponse.error) {
            setErrorList(validationResponse.error.details);
            setLoading(false);
        }
        else {
            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);
            if (data.message === 'success') {

                props.history.push('/login');
                setLoading(false);
            }
            else {
                setLoading(false);
                setError(data.message);
            }
        }
    }

    return (
        <div className='w-50 m-auto py-4'>
            <h2>Register Form</h2>

            <form onSubmit={formSubmit}>



                {error && <div className='alert alert-danger'>{error}</div>}

                {errorList.map((error, index) => index === 4 ? <div className="alert alert-danger">Invalid Password</div>
                    : <div className='alert alert-danger p-2'>{error.message}</div>)}


                <div className='my-2'>
                    <label htmlFor="first_name">First Name</label>
                    <input onChange={getUser} className='form-control' type="text" name='first_name' />
                </div>

                <div className='my-2'>
                    <label htmlFor="last_name">Last Name</label>
                    <input onChange={getUser} className='form-control' type="text" name='last_name' />
                </div>

                <div className='my-2'>
                    <label htmlFor="age">Age</label>
                    <input onChange={getUser} className='form-control' type="number" name='age' />
                </div>

                <div className='my-2'>
                    <label htmlFor="email">Email</label>
                    <input onChange={getUser} className='form-control' type="text" name='email' />
                </div>

                <div className='my-2'>
                    <label htmlFor="password">Password</label>
                    <input onChange={getUser} className='form-control' type="password" name='password' />
                </div>

                <button type='submit' className='btn btn-outline-info mt-3'>
                    {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
                </button>
            </form>
        </div>
    )
}
