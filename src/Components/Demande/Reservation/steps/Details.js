import { useStepperContext } from "../StepperContext";
import React from "react";
import Select from "react-select";
import { useState } from "react";
import Accordion3 from "./Accordion3";
import Accordion from "./Accordion";

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const [valeur, setValeur] = useState("");

  const handleChange = (event) => {
    setValeur(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("La valeur est : ", valeur);
  };
  const options = [
    { value: "homme", label: " HOMME" },
    { value: "femme", label: "FEMME" },
  ];
  const options1 = [
    { value: "master", label: "MASTER" },
    { value: "magister", label: "MAGISTER" },
    { value: "ingeniorat", label: "INGENIORAT" },
  ];

  return (
    <div className="flex flex-col ">
          <h2 className="text-xl font-semibold">Inscrivez les enfants que vous voulez placer dans cette creche</h2>
       <div className="grid md:grid-cols-2 md:gap-6 my-3">
          <div className="relative z-0 w-full mb-2 group">
            <input
                onKeyPress={(event) => {
                  if (!/[a-zA-Z]/i.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              NOM
            </label>
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <input
              onKeyPress={(event) => {
                if (!/[a-zA-Z]/i.test(event.key)) {
                  event.preventDefault();
                }
              }}
              
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0 border-1 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PRENOM
            </label>
          </div>
        </div>
      <div className="grid md:grid-cols-2 md:gap-6 my-2">
        {/* <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            NUMERO DU PV CS
          </label>
        </div> */}
        <div className="relative z-0 w-full mb-2 group mt-0">
            <input
              type="date"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              DATE DE NAISSANCE
            </label>
          </div>
        <div id="select">
          <div className="mb-2 block">
            <label htmlFor="type" value="Select your type" s>
             Sexe
            </label>
          </div>
          <Select options={options} />
        </div>
         <div className="relative z-0 w-full mb-2 group mt-0">
            <input
              type="date"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date souhaites pour ajouter l'enfant
            </label>
          </div>
      </div>
            <div className="grid md:grid-cols-2 md:gap-6 my-2">
            <div className="relative z-0 w-full mb-3 group my-2">
            <Accordion3></Accordion3>
          </div>
        <div className="relative z-0 w-full mb-6 group">
        <Accordion/>
        </div>
      </div>
   
    </div>
  );
}
