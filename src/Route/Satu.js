import React from 'react'
import { Link } from 'react-router-dom'


const Satu = () => {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', minHeight:'100vh'}}>
            <h1>ini Satu</h1>
            <br/>
            <Link className="btn btn-primary m-3" to="/">Home</Link>
            <Link className="btn btn-info m-3" to="/dua">Dua</Link>
        </div>
    )
}

export default Satu
