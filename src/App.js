import React from 'react';
import SignUp from './Components/SignUp';
import Form from './Components/Form';
import { Routes, Route } from 'react-router-dom';
import PageAuthentification from './Components/PageAuthentification';
import PageLogin from './Components/PageLogin';
import PageChoice from './Components/PageChoice';
import Menu from './Components/UTILISATION/PagesProprio/Menu'
import Menu2 from './Components/UTILISATION/PagesParent/Menu2';
import Home from './Components/HomePage/Home';
import Search from './Components/SearchPage/Search';
import DetailsCreche from './Components/SearchPage/DetailsCreche/DetailsCreche';
import MesEnfants from './Components/UTILISATION/Enfants/MesEnfants';
import MesCreches from './Components/UTILISATION/PagesProprio/Creches/MesCreches';
import MonProfil from './Components/UTILISATION/Profil/MonProfil';
import PageReservation from './Components/Demande/Reservation/PageReservation';
import DescCreche from './Components/SearchPage/DescCreche';
import PAGENVENFANT from './Components/UTILISATION/Enfants/PAGENVENFANT';


// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  return (

    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Search" element={< Search />} />
      <Route path="/Login" element={<PageLogin/>} />
      <Route path="/Authentification" element={<PageAuthentification />} />
      <Route path="/Choice" element={<PageChoice />} />
      <Route path="/MenuProprio" element={<Menu />} />
      <Route path="/MenuParent" element={<Menu2 />} />
      <Route path="/DetailsCreche" element={<DetailsCreche/>}></Route>
      <Route path='/kkkk' element={<App/>}> </Route>
      <Route path='/MesEnfants' element={<MesEnfants/>}></Route>
      <Route path='/MesCreches' element={<MesCreches/>}></Route>
      <Route path='/MonProfil'  element={<MonProfil/>}/>
      <Route path='/Reservation'  element={<PageReservation/>}/>
      <Route path='/DescCreche'  element={<DescCreche/>}/>
      <Route path='/AjoutEnfant'  element={<PAGENVENFANT/>}/>

      
    </Routes>
      

   
       </>
  );
}

export default App;
