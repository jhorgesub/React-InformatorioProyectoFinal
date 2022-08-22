import { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import {useKey} from 'rooks';

export default function SearchBox() {
  const inputRef = useRef();
  const navigate = useNavigate();
  useKey(["Enter"], windowEnter);


  function onSubmit(e) {
    console.log("Enviado");
    navigate("/details");
  }

  function windowEnter(e) {
    console.log("Enviado con enter");
    navigate("/details");
  }

  useEffect(() => {
    inputRef.current.focus();

  })

  return (
    <>
      <div className="container mt-52 flex flex-col justify-center items-center ">
        <input
          className="border p-2"
          type="text"        
          value={inputRef.current?.value}
          placeholder="Bitcoin"
          ref={inputRef}
        />
        <div className="mt-2">
          <Button variant="secondary" type="submit" onClick={onSubmit} >Buscar</Button>{" "}
        </div>
      </div>
    </>
  );
}