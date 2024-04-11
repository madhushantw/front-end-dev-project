import React from 'react'

const Frame = (props) => {
    const {header, body, image, reverse} = props;
    const  derection = reverse === false? "sm:flex-row-reverse":"sm:flex-row";
    // const  derection = "-reverse";
  return (
    <div className= {`max-w-[1064px] flex flex-col items-center sm:flex ${derection} justify-center m-auto`}>
        <img src={image} width={"346px"}/> 
        <div className='max-w-[542px] flex flex-col items-center sm:items-start sm:text-left mx-2'>
            <div className='font-poppins text-[28px] font-bold text-primary '>{header}</div>
            <div className='font-poppins text-xs py-2'>{body}</div>
            <button className=' mt-2 py-2 px-3 bg-secondary-color rounded text-accent-white text-sm'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default Frame