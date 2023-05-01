import React, { useState } from 'react';
import AccordionSection from './AccordionSection';

function Accordion1() {
  const [sections, setSections] = useState([
    { title: 'ETABLISSEMENT DORGINE DE MAGISTER ↓ ' , content: <><input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
        placeholder=" "
      required />{/*<label for="floating_first_name"
  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-900 peer-focus:dark:text-purple-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Etablissement d'origine de Magistaire</label> <br></br>*/}</>, isOpen: false },
    // { title: 'Section 2', content: 'Contenu de la section 2', isOpen: false },
    // { title: 'Section 3', content: 'Contenu de la section 3', isOpen: false },
  ]);

  const toggleSection = (index) => {
    const newSections = [...sections];
    newSections[index].isOpen = !newSections[index].isOpen;
    setSections(newSections);
  };

  return (
    <div>
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          title={section.title}
          content={section.content}
          isOpen={section.isOpen}
          toggleSection={() => toggleSection(index)}
        />
      ))}
    </div>
  );
}

export default Accordion1;
