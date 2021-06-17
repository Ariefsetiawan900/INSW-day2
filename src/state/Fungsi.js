import React,{useState} from 'react'

const Fungsi = () => {
    const [nama, setNama] = useState("Arief")
    return (
        <div>
           Hallo Nama Saya {nama} 
        </div>
    )
}

export default Fungsi
