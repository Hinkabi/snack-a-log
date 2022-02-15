import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ShowSnackDetails(){
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
      .then((res)=>{
        setSnack(res.data);
      }).catch(()=>{
        navigate("/not-found");
      });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
          .then((res)=>{
            navigate("/snacks");
          }).catch((err)=>{
            console.log(err);
          })
      };
    return(
        <article className = "New Snack">
            <h5>
                <div>Snack name: {snack.name}</div>
            </h5>
            <p>Image: {snack.image}</p>
            <p>Protein: {snack.protein}</p>
            <p>Fiber:{snack.fiber}</p>
            <p>Added_Sugar:{snack.added_sugar}</p>
            <div className="showNavigation">
                <div>
                {" "}
                <Link to={`/snacks/new`}>
                    <button>Back</button>
                </Link>
                </div>
                <div>
                {" "}
                <Link to={`/snacks/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                </div>
                <div>
                {" "}
                <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
}

export default ShowSnackDetails;