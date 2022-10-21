

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/app.css";

const Form = () => {
const  navigate = useNavigate();
// Data add by hooks
const [input, setInput] = useState(
    {
      name:""
    }
    );

// this function make Api to store data into a database
const storeData = async (e)=>{
    e.preventDefault();
    const res = await axios.post("contact",input);
    // console.log(res);
    navigate("/");

  }

return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <h1 className='clr'>Form </h1>
                    <form onSubmit={storeData}>
                        <div className="form-group">
                            <label htmlFor="exampleInputPhone">Name</label>
                            <input type="text" className="form-control" name="name" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.name}/>

                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
    ) }


export default Form
