import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'

export default function Login(props) {


    let [errorList, setErrorList] = useState([]);
    let [loading, setLoading] = useState('');
    let [error, setError] = useState();


    let [user, setUser] = useState({ email: '', password: '' });

    function getUser(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);

    }

    function valdiationRegisterForm() {

        let scheme = Joi.object({
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
            let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
            if (data.message === 'success') {
                localStorage.setItem('userToken' , data.token);
                props.getUserInfo();
                props.history.push('/home');
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
            <h2>Login Now</h2>

            <form onSubmit={formSubmit}>

                {error && <div className='alert alert-danger'>{error}</div>}

                {errorList.map((error, index) => index === 1 ? <div className="alert alert-danger p-2 ">Invalid Password</div>
                    : <div className='alert alert-danger p-2'>{error.message}</div>)}

                <div className='my-2'>
                    <label htmlFor="email">Email</label>
                    <input onChange={getUser} className='form-control' type="text" name='email' />
                </div>

                <div className='my-2'>
                    <label htmlFor="password">Password</label>
                    <input onChange={getUser} className='form-control' type="password" name='password' />
                </div>

                <button type='submit' className='btn btn-outline-info mt-3'>
                    {loading ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
                </button>
            </form>
        </div>
    )

}
