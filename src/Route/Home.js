import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', minHeight:'100vh'}}>
            <h1>Ini halaman Utama</h1>
            <br/>
            <Link className="btn btn-primary m-3" to="/satu">Satu</Link>
            <Link className="btn btn-info m-3" to="/dua">Dua</Link>
        </div>
    )
}

export default Home
