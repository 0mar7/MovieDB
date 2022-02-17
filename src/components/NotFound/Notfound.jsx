import React from 'react'
import logo from "../../images/notfound.jpg"
export default function Notfound() {
    return (
        <div>
            <div><img className=' w-25 mx-auto d-block py-5 ' src={logo} /></div>
            <h2 className='text-center text-muted fw-bold '> Not Found</h2>
        </div>
    )
}
