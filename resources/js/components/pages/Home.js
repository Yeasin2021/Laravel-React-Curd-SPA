import React from 'react';
import { useEffect, useState, } from 'react';
import axios from 'axios';

const Home = () => {

const [users, setUser] = useState([]);

useEffect(()=>{
    try{

        // this function is make API
        const getAllUsers = async () =>{
        const response = await axios.get("contact").then((result)=>{console.log(resutl)});
        setUser(response.data);
        //console.log(response.data);
      };

      getAllUsers();

    }catch(error){
      console.log(error);
    }

});



    return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-md-8">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID.No</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(users)} */}
                        {/* {
                            users.map((user)=>{
                            return(
                                <tr className='headlineText'>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                </tr>
                            )
                            })
                        } */}

                        </tbody>
                    </table>
                </div>
                <div class="col-sm"></div>
            </div>
        </div>
    </div>
    ) }



export default Home
