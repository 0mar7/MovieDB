import React from 'react'

export default function Home(props) {
    return (
        <div>
            {props.loginUser?  <h2>Welcome:  {props.loginUser.first_name}</h2>:''}
            
        </div>
    )
}
