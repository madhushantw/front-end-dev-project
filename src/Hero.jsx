import React from 'react'

const Hero = () => {
  return (
    <div className=' relative '>
        <div className=' overflow-hidden'>
             <img src="https://s3-alpha-sig.figma.com/img/7d26/92c3/02df419cba923b35861b32302ece4d90?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE~y8UBZk8VF~SMbggxa3W4MDW7tjAmy16DTeG-1HaG4yB4JA4qC5L3jfnBo1tY593xznzhDlDVxo6oiC-8T4pTghLXjC4XDA-yqRwqg2WJ6Irime5YgFBc~MfpV72fHihV4fVs8jD7J-mWEuHO6lXAyE4gpGXLY8KrXIIr6L5atC1UlDSQKAClEQCmYA0Y9iEXeS2rNj5ZskCmL1-Wvby~fD3-S-Lb~mnp3hCE4ZTuNgS8ELRtDhvHPDKN4yZjUg6k3ZjegwgohdqjBKCn58awtt5i9aAE3OnKDxuQPE1sBoktPwT2Mhg-4xmXUFGDEFcJ8zdryANgEwqYgj~IRqQ__" alt="Hero image" height={"700px"}/>
        </div>
       
        <div className='md:absolute md:bottom-[60px] md:left-[60px] md:w-[630px] bg-gradient-to-r to-[#1CBDDD] from-[#4DCA79] px-[40px] pt-[24px] pb-[32px] gap-5'>
            <h1 className=' text-accent-white text-5xl font-inter mb-4'>We crush your competitors, goals, and sales records - without the B.S.</h1>
            <button className='py-2 px-3 text-sm bg-secondary-color rounded text-accent-white uppercase'>Get free consultation</button>
        </div>
    </div>
  )
}

export default Hero