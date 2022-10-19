import React from 'react';
import { useEffect, useState, } from 'react';
import axios from 'axios';

const Home = () => {

const [users, setUser] = useState([]);

useEffect(()=>{
    try{

        // this function is make API
        const getAllUsers = async () =>{
        const response = await axios.get("contact").then((result)=>{
            //console.log(result)
            setUser(result.data.contacts);
        });
        // setUser(response.data);
        //console.log(response.data);
      };

      getAllUsers();

    }catch(error){
      console.log(error);
    }

});



    return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-sm"></div>
                <div className="col-md-8">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID.No</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(users)} */}
                        {
                            users.map((user)=>{
                            return(
                                <tr className='headlineText'>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
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
