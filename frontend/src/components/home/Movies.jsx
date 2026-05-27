import React from 'react'
import Title from '../Title'
import img from "../../assets/images/poster.jpg"
import useNavigate from 'react-router-dom'

const Movies = () => {

  const navigate = useNavigate();

  let number = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  return (
    <section className='section'>

      <Title title={"Only in Theatres"} />

      <div className='grid grid-cols-6 gap-4'>
        {
          number.map((item, index) => {
            return (
              <div onClick={()=>{
                navigate("/show");
              }} key={index} className='rounded-xl border border-gray-100 bg-white transition-transform hover:-translate-y-1 hover:border-gray-300 cursor-pointer'>
                <img className='aspect-3/4 w-full object-cover' src={img} alt="" />
                <div className='p-3 flex flex-col gap-1'>
                  <h5 className='font-semibold text-lg leading-none'>Lorem, ipsum dolor.</h5>
                  <span className='leading-none text-sm'>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
            )
          })
        }
      </div>



    </section>
  )
}

export default Movies