import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Snack from "../Components/Snack.js";

const API = process.env.REACT_APP_API_URL;

function Snacks(){

    const [snacks, setSnacks] = useState([]);
        useEffect(() => {
        axios.get(API + "/snacks")
        .then((res)=>{
            setSnacks(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    return(
        <div>
            {snacks.map((snack) => {
            return <Snack key={snack.id} snack={snack.name} snack={snack.image}/>;
            })}
        </div>
    )
}

export default Snacks;