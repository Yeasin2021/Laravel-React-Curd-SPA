import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [input, setInput] = useState(
        {
          name:"",
        }
        );

        useEffect(()=>{
            try{

                const getSingleRecord = async () =>{
                const response = await axios.get(`/contact/${id}/edit`);
                // console.log(response.data.contact.name)
                setInput(response.data.contact);


              };

              getSingleRecord();

            }catch(error){
              console.log(error);
            }
        },[id]);

        const updateUser = async (e) =>{
            e.preventDefault();
            await axios.put(`/contact/${id}`,input);
            toast.info("Data Updated !!");
            navigate("/home");
        }

  return (
    <div class="container">
        <ToastContainer/>
        <div class="row">
          <div class="col-md-6">
            <form onSubmit={updateUser}>
                <div class="form-group">
                  <label for="exampleInputPhone">Name</label>
                  <input type="text" class="form-control" name="name" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.name} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
        </div>
      </div>
  )
}

export default Edit
