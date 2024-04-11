import React, { useState } from 'react'
import Accordion from './Components/Accordion'


const Questions = () => {
    const [accordions, setAccordion] = useState([ 
        { 
            key: 1, 
            title: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', 
            data: `Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.`, 
            isOpen: false
        },
        { 
            key: 2, 
            title: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', 
            data: `Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.`, 
            isOpen: false
        },
        { 
            key: 3, 
            title: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?', 
            data: `Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.`, 
            isOpen: false
        },
    ]); 

    const toggleAccordion = (accordionkey) => { 
        const updatedAccordions = accordions.map((accord) => { 
            if (accord.key === accordionkey) { 
                return { ...accord, isOpen: !accord.isOpen }; 
            } else { 
                return { ...accord, isOpen: false }; 
            } 
        }); 
        setAccordion(updatedAccordions); 
    }; 


  return (
    <div className=' max-w-[questions] flex flex-col justify-center items-center my-8'>
        <h1 className='font-poppins text-[27px] font-bold text-primary mb-8'>Frequently asked questions</h1>
        <div>
        {accordions.map((accordion) => ( 
            <Accordion 
                key={accordion.key} 
                title={accordion.title} 
                data={accordion.data} 
                isOpen={accordion.isOpen} 
                toggleAccordion={() => toggleAccordion(accordion.key)} 
            /> 
        ))} 
        </div>
        
    </div>
  )
}

export default Questions