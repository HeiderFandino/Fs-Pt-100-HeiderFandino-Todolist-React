import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const Todolist = () => {
  const [inputValue, setInputValue] = useState("");
const [lista, setLista] = useState([]);
  return (
    <div className="container">
      <h2>Lista de tareas. </h2>
      <ul>
        <li>
          {" "}
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setLista(lista.concat(inputValue));
                setInputValue("");
              
              }
            }}
            placeholder="Cosas por hacer..."
          />
        </li>

        {lista.map((item , index) => (
          <li> {item} <FontAwesomeIcon icon={faTrashCan} onClick={() => setLista(lista.filter((t, currentIndex)=> index != currentIndex ))} />
          </li>
        ))}
      </ul>
      <div>
        <p> {lista.length }  Tareas Pendientes... </p>
      </div>
    </div>
  );
};
