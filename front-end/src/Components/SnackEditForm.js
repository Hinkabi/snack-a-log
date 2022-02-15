import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SnackEditForm() {
    let { id } = useParams();
  
    const [snack, setSnack] = useState({
        name: "",
        image: "",
        fiber: "",
        protein: "",
        added_sugar: "",
    });
  
    const navigate = useNavigate();
  
    const handleTextChange = (event) => {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    };
  
    // const handleCheckboxChange = () => {
    //   setSong({ ...song, is_favorite: !song.is_favorite });
    // };
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
        .then((res)=>{
          setSnack(res.data);
        }).catch((err)=>{
          navigate("/not-found");
        })
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put(`${process.env.REACT_APP_API_URL}/snacks/${id}`, snack)
        .then((res)=>{
          navigate(`/snacks/${id}`);
        }).catch((err)=>{
          console.log(err)
        })
    };
    return (
        <div className="EditForm">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Snack Name</label>
            <input required
            id="name"
            value={snack.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Snack"
            />
            <label htmlFor="image">Image:</label>
            <input required
            id="image"
            type="text"
            name="image"
            value={snack.image}
            placeholder="Image"
            onChange={handleTextChange}
            />
            <label htmlFor="fiber">Fiber:</label>
            <input
            id="fiber"
            type="text"
            value={snack.fiber}
            placeholder="Fiber"
            onChange={handleTextChange}
            />
            <label htmlFor="protein">Protein:</label>
            <input
            id="protein"
            type="textbox"
            onChange={handleTextChange}
            value={snack.protein}
            placeholder="Protein"
            />
            <label htmlFor="added_sugar">Added_Sugar:</label>
            <input
            id="added_sugar"
            value={snack.added_sugar}
            type="text"
            onChange={handleTextChange}
            placeholder="Added_Sugar"
            />
            <br />
            <input type="submit" />
      </form>
    </div>
    );
  }
  
  export default SnackEditForm;