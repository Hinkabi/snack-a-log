import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const API = process.env.REACT_APP_API_URL;

function HeartHealth({ snackHealth }) {

  return (
    <div>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
      <div>
        {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack.name}/>;
        })}
      </div>
    </div>
  );
}

export default HeartHealth;
