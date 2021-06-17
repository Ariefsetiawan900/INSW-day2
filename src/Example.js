import React,{useState} from 'react'

const Example = () => {
    const [nilai, setNilai] = useState("")
    for(let i = 1;i<10;i++){
        setNilai(i)
    }
    return (
        <div>
            {nilai}
        </div>
    )
}

export default Example
