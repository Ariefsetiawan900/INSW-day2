import React,{useState} from "react";

const FormCustom = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [fullName, setFullName] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setFullName(`${firstName} ${lastName}`)
    }
  return (
    <div className="container p-5 w-50">
      <form onSubmit={handleSubmit}>
     <div className="mb-4">
         <label htmlFor="firstName mb-1">First Name</label>
         <input type="text"className="form-control" onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
     </div>
     <div className="mb-4">
         <label htmlFor="lastName mb-1">Last Name</label>
         <input type="text"className="form-control" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
     </div>
         <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
      </form>
      <h5>My Name Is {fullName ? fullName : "..."}</h5>
    </div>
  );
};

export default FormCustom;
