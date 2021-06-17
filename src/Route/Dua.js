import React from 'react'
import { Link } from 'react-router-dom'


const Dua = () => {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', minHeight:'100vh'}}>
            <h1>Ini Dua</h1>
            <br/>
            <Link className="btn btn-primary m-3" to="/satu">Satu</Link>
            <Link className="btn btn-info m-3" to="/">Home</Link>
        </div>
    )
}

export default Dua
