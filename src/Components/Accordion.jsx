import React from 'react'

const Accordion = (props) => {
  return (
    <div className="rounded-md mb-1 md:w-[846px] w-screen font-inter bg-[#FAF8FF]"> 
        <button className=" flex gap-3 justify-between w-full p-6 text-left  text-lg font-medium text-analogous-1 rounded hover:bg-gray-300 transition duration-300" onClick={props.toggleAccordion}> 
            <h1>{props.title}</h1>
            <span className="transition-transform duration-300"> 
                {props.isOpen ? '-' : '+'} 
            </span> 
        </button> 
            {props.isOpen && ( 
                <div className="p-6 text-[16px] text-text-light"> 
                    {props.data} 
                </div> 
            )} 
    </div> 
  )
}

export default Accordion