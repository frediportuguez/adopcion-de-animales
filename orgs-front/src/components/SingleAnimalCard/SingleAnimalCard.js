import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams/* , Link */ } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
//import { BsWhatsapp } from "react-icons/bs";
import { notLoggedIn/* , notFormCompleted */ } from "../../hooks/alert";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import SingleSlider from "../SingleSlider/SingleSlider";
import s from "./SingleAnimalCard.module.css";


const SingleAnimalCard = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const { /* loggedUser, */ isAuthenticated } = useContext(AuthContext);

  //console.log("PARAMS", useParams().id)
  const [pet, setPet] = useState({
    "_id": "",
    "animalname": "",
    "history": "",
    "image": [],
    "fundationId": "",
    "location": "",
    "size": "",
    "species": "",
    "sex": "",
    "personality": "",
    "age": "",
    "vaccines": ""
  });
  const [org, setOrg] = useState([]);
  
  useEffect(() => {
    find(`/animal/${id}`)
      .then(petObj => setPet(petObj))
      .catch(error => console.log(error));
  }, [id]);

  //console.log(pet, "pet")

  useEffect(() => {
  //if(pet._id) {
    //console.log("PET FUNDATION ID:",pet.fundationId);
    find(`/orgs/key/${pet.fundationId}`)
    .then(orgArr => setOrg(orgArr))
    .catch(err => console.log(err));
  //}
}, [pet.fundationId])

  //console.log("FUNDACION:", org[0])
  const handleClick = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
        navigate(`/account/edit-animal/${id}`);
    } else {
        notLoggedIn();
        navigate("/login");
    }
  }


  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1 className={s.title}>{pet.animalname}</h1>
        <div className={s.content}>
          {/* {!pet.image ? pet.image = ["/no_pet.jpg"] : null} */}
          <SingleSlider images={pet.image}/>
          <div className={s.text}>
            <p >{`${pet.species && capitalizeFirst(pet.species)} • ${pet.sex && capitalizeFirst(pet.sex)}`}</p>
            <h4 className={s.subTitle}>Edad</h4>
            <p  className={s.info}>{pet.age && capitalizeFirst(pet.age)}</p>
            <h4 className={s.subTitle}>Tamaño </h4>
            <p  className={s.info}>{pet.size && capitalizeFirst(pet.size)}</p>
            <h4 className={s.subTitle}>Vacunas</h4>
            <p  className={s.info}>{pet.vaccines}</p>
            <h4 className={s.subTitle}>Carácter</h4>
            <p  className={s.info}>{pet.personality}</p>
            <h4 className={s.subTitle}>Historia</h4>
            <p  className={s.info}>{pet.history}</p>
            <h4 className={s.subTitle}>Ubicación</h4>
            <p  className={s.info}>{pet.location && capitalizeFirst(pet.location)}</p>
          </div>
          <button className={s.button} onClick={handleClick}>
            {`Editar info`}
          </button>

        </div>
      </div>

    </div>

  )
}

export default SingleAnimalCard;



