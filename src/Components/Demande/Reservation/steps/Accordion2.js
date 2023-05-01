import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import PageReservation from '../PageReservation';

function Accordion2() {
  const [sections, setSections] = useState([
    { title: 'ETABLISSEMENT DORGINE DINGENIORAT ↓', content: <>
    <PageReservation/>
    </>, isOpen: false },
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

export default Accordion2;