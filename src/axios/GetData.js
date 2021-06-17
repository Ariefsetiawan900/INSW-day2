import React, { useState, useEffect } from "react";
import axios from "axios";

const GetData = () => {
  const [identifier, setIdentifier] = useState()
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)

  const getUsers = async () => {
    setLoading(true)
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier}`
      );
      setUsers(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error.message);
      setLoading(true)
    }
  };

  useEffect(() => {
    getUsers();
  }, [identifier]);
  return (
    <div className="container py-5">
      <input type="text" name="identifier" value={identifier} onChange={(e)=>setIdentifier(e.target.value)} className="form-control"/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Webiste</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          {loading ? <div>Loading ...</div>:
          <>
          
          <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td></>
          
          }

               
              </tr>
          {/* {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default GetData;
