import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "../Components/Snack.js";

const API = process.env.REACT_APP_API_URL;

function HeartHealth({ snackHealth }) {

  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios.get(API + "/snacks")
    .then((res)=>{
      setSnacks(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
      <div>
        {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack}/>;
        })}
      </div>
    </div>
  );
}

export default HeartHealth;
