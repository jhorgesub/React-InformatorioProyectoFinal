import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Details({item}) {

    const [datos,setDatos] = useState(null);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${page}`)
    .then((response) => {
        console.log(response.data.results);
        setDatos(response.data.results)
    }).catch((error) => {
        setError(error)
    })
  })  

  

  return (
    <>
      <Header />
      <div>
        {datos && datos.map((item) => {
            return (
                {item}
            )
        }
        )}
      </div>

      <Footer />
    </>
  );
}
