import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Authentification from "./Authentification";
import { Link } from "react-router-dom";
import Select from "react-select";

function Form() {
  const options = [
    { value: "homme", label: " HOMME" },
    { value: "femme", label: "FEMME" },
    
  ];
  const WilayaOptions =[
    { value: "Adrar", label: "1-Adrar" },
    { value: "Chlef", label: "2-Chlef" },
    { value: "Laghouat", label: "3-Laghouat" },
    { value: "Oum El Bouaghi", label: "4-Oum El Bouaghi" },
    { value: "Batna", label: " 5-Batna" },
    { value: "Béjaïa", label: "6-Béjaïa" },
    { value: "Biskra", label: " 7-Biskra" },
    { value: "Béchar", label: "8-Béchar" },
    { value: "Blida", label: " 9-Blida" },
    { value: "Bouira", label: "10-Bouira" },
    { value: "Tamanrasset", label: "11-Tamanrasset " },
    { value: "Tébessa<", label: "12-Tébessa<" },
    { value: "Tlemcen", label: " 13-Tlemcen" },
    { value: "Tiaret", label: "14-Tiaret" },
    { value: "Tizi Ouzou", label: " 15-Tizi Ouzou" },
    { value: "Alger", label: "16-Alger" },
    { value: "Djelfa", label: "17-Djelfa " },
    { value: "Jijel", label: "18-Jijel" },
    { value: "Sétif", label: "19-Sétif " },
    { value: "Saïda", label: "20-Saïda" },
    { value: "Skikda", label: " 21-Skikda" },
    { value: "Sidi Bel Abbès", label: "22-Sidi Bel Abbès" },
    { value: "Annaba", label: "23-Annaba " },
    { value: "Guelma", label: "24-Guelma" },
    { value: "Constantine", label: " 25-Constantine" },
    { value: "Médéa", label: "26-Médéa" },
    { value: "Mostaganem", label: " 27-Mostaganem" },
    { value: "M'Sila", label: "28-M'Sila" },
    { value: "Mascara", label: " 29-Mascara" },
    { value: "Ouargla", label: "30-Ouargla" },
    { value: "Oran", label: " 31-Oran" },
    { value: "El Bayadh", label: "32-El Bayadh" },
    { value: "Illizi", label: " 33-Illizi" },
    { value: "Bordj Bou Arreridj", label: "34-Bordj Bou Arreridj" },
    { value: "Boumerdès", label: "35-Boumerdès " },
    { value: " El Tarf", label: " 36-El Tarf" },
    { value: "Tindouf", label: " 37-Tindouf" },
    { value: "Tissemsilt", label: "38-Tissemsilt" },
    { value: "El Oued", label: "39-El Oued " },
    { value: "Khenchela", label: "40-Khenchela" },
    { value: "Souk Ahras", label: "41-Souk Ahras " },
    { value: "Tipaza", label: "42-Tipaza" },
    { value: "Mila", label: " 43-Mila " },
    { value: "Aïn Defla", label: "44-Aïn Defla" },
    { value: "Naâma", label: "  45-Naâma" },
    { value: "Aïn Témouchent", label: "46-Aïn Témouchent" },
    { value: "Ghardaïa", label: " 47-Ghardaïa " },
    { value: "Relizane", label: " 48-Relizane" },
    { value: "Timimoun", label: "49-Timimoun " },
    { value: "Bordj Badji Mokhtar", label: " 50-Bordj Badji Mokhtar" },
    { value: "Ouled Djellal", label: " 51-Ouled Djellal" },
    { value: "Béni Abbès ", label: "52-Béni Abbès " },
    { value: "In Salah", label: " 53-In Salah" },
    { value: "In Guezzam", label: "54-In Guezzam" },
    { value: "Touggourt ", label: "55-Touggourt  " },
    { value: "Djanet ", label: "56-Djanet " },
    { value: "El M'Ghair", label: " 57-El M'Ghair" },
    { value: "El Meniaa ", label: "58-El Meniaa " },
    
  ]
  return (
    <form className="FormInscription">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="ml-3 text-l font-semibold leading-7 text-blue-950">
            Profil
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Certaines de ses informations seront importantes
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="ml-3 block text-l font-medium leading-6 text-blue-950"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm bg-white ring-2 ring-inset ring-red-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-rose-900 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 px-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Remadna Rayane"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="ml-3 block text-l font-medium leading-6 text-blue-950"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm bg-white ring-2 ring-inset ring-red-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-rose-900 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="date"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2 px-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Remadna Rayane"
                  />
                </div>
              </div>
            </div>

            {/* <div className="col-span-full">
              <label
                htmlFor="about"
                className="ml-3 block text-l font-medium leading-6 text-blue-950"
              >
                A propos de vous
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-950 sm:py-2 px-2 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 ml-3 text-sm leading-6 text-gray-700">
                Ecrivez quelques phrases sur vous.
              </p>
            </div> */}

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className=" ml-3 block text-l font-medium leading-6 text-blue-950"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-400"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white  py-2 px-2 text-sm font-semibold text-blue-950 shadow-sm ring-2 ring-inset ring-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Changer
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="ml-3 block text-l font-medium leading-6 text-blue-950"
              >
                Inserer documents
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-red-400 px-6 py-10 bg-white">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-red-500 focus-within:outline-none focus-within:ring-2  focus-within:ring-indigo-100 focus-within:ring-offset-2  hover:text-indigo-900"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-blue-950">
            Informations Personnelles{" "}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Utilisez une addresse mail permanante et accessible afin de pouvoir
            recevoir nos emails .
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[a-zA-Z]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Prenom
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[a-zA-Z]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Addresse mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label
                htmlFor="sexe"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sexe
              </label>
              <div className="mt-2">
                <select
                  id="sexe"
                  name="sexe"
                  autoComplete="country-name"
                  className="block w-full h-9 rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Homme</option>
                  <option>Femme</option>
                </select>
              </div>
            </div> */}
            <div id="select">
              <div className="mb-2 block ">
                <label
                  htmlFor="type"
                  value="Select your type font-[Inter] text-blue-950"
                >
                  Sexe
                </label>
              </div>
              <div className="ring-2 ring-red-400 rounded-md " s>
                <Select options={options} />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Votre addresse de residence complete
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              {/* <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Wilaya
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full h-9 rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>1-Adrar</option>
                  <option>2-Chlef</option>
                  <option>3-Laghouat</option>
                  <option>4-Oum El Bouaghi</option>
                  <option>5-Batna</option>
                  <option>6-Béjaïa</option>
                  <option>7-Biskra</option>
                  <option>8-Béchar</option>
                  <option>9-Blida</option>
                  <option>10-Bouira</option>
                  <option>11-Tamanrasset</option>
                  <option>12-Tébessa</option>
                  <option>13-Tlemcen</option>
                  <option>14-Tiaret</option>
                  <option>15-Tizi Ouzou</option>
                  <option>16-Alger</option>
                  <option>17-Djelfa</option>
                  <option>18-Jijel</option>
                  <option>19-Sétif</option>
                  <option>20-Saïda</option>
                  <option>21-Skikda</option>
                  <option>22-Sidi Bel Abbès</option>
                  <option>23-Annaba</option>
                  <option>24-Guelma</option>
                  <option>25-Constantine</option>
                  <option>26-Médéa</option>
                  <option>27-Mostaganem</option>
                  <option>28-M'Sila</option>
                  <option>29-Mascara</option>
                  <option>30-Ouargla</option>
                  <option>31-Oran</option>
                  <option>32-El Bayadh</option>
                  <option>33-Illizi</option>
                  <option>34-Bordj Bou Arreridj</option>
                  <option>35-Boumerdès</option>
                  <option>36-El Tarf</option>
                  <option>37-Tindouf</option>
                  <option>38-Tissemsilt</option>
                  <option>39-El Oued</option>
                  <option>40-Khenchela</option>
                  <option>41-Souk Ahras</option>
                  <option>42-Tipaza</option>
                  <option>43-Mila</option>
                  <option>44-Aïn Defla</option>
                  <option>45-Naâma</option>
                  <option>46-Aïn Témouchent</option>
                  <option>47-Ghardaïa</option>
                  <option>48-Relizane</option>
                  <option>49-Timimoun</option>
                  <option>50-Bordj Badji Mokhtar</option>
                  <option>51-Ouled Djellal</option>
                  <option>52-Béni Abbès </option>
                  <option>53-In Salah</option>
                  <option>54-In Guezzam</option>
                  <option>55-Touggourt </option>
                  <option>56-Djanet </option>
                  <option>57-El M'Ghair</option>
                  <option>58-El Meniaa </option>
                </select>
               
              </div> */}
              <div id="select">
              <div className="mb-2 block ">
                <label
                  htmlFor="type"
                  value="Select your type font-[Inter] text-blue-950"
                >
                  Wilaya
                </label>
              </div>
              <div className="ring-2 ring-red-400 rounded-md ">
                <Select options={WilayaOptions} />
              </div>
            </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Commune
              </label>
              <div className="mt-2">
                <input
                   onKeyPress={(event) => {
                    if (!/[a-zA-Z]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 px-2 py-2  text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 ">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Numero de telephone
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="number"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Code postal
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-9">
          <h2 className="ml-2 mb-3 text-l font-semibold leading-7 text-blue-950">
            Mot de passe{" "}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mot de passe
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirmez votre mot de passe
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Nous vous informerons toujours des changements importants, mais vous
            pouvez choisir ce que vous souhaitez également recevoir comme
            informations.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Par Email
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Commentaires
                    </label>
                    <p className="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Candidates
                    </label>
                    <p className="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      Offers
                    </label>
                    <p className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-blue-950 hover:text-red-500"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 hover:scale-105 duration-100 ring-2 ring-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <a href="/Authentification">Sauvgarder</a>
        </button>
      </div>
    </form>
  );
}

export default Form;
