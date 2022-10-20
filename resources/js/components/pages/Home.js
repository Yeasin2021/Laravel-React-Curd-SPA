import React from 'react';
import { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

const [users, setUser] = useState([]);

useEffect(()=>{
    try{


        const getAllUsers = async () =>{
        const response = await axios.get("contact").then((result)=>{

            setUser(result.data.contacts);
        });

      };

      getAllUsers();

    }catch(error){
      console.log(error);
    }

});

const deleteUser = async (id) =>{
    await axios.delete(`/contact/${id}`);
    const newUsers = users.filter((user)=>{
      return user.id !== id;
    });
    setUser(newUsers);
  }



    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-sm"></div>
                <div className="col-md-8">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Serial No.</th>
                                <th scope="col">User Id.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user,i)=>{
                            return(
                                <tr className='headlineText' key={i}>
                                <th scope="row">{++i}</th>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>
                                    <Link to={`/contact/${user.id}`}>
                                        <button className='btn btn-primary mr-2'>Edit</button>
                                    </Link>

                                       <button onClick={()=> deleteUser(user.id)} className='btn btn-danger'>Delete</button>

                                </td>

                                </tr>
                            )
                            })
                        }

                        </tbody>
                    </table>
                </div>
                <div className="col-sm"></div>
            </div>
        </div>
    </div>
    ) }



export default Home
