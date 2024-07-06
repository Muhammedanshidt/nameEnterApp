    import React, { useState ,useContext} from 'react'
    import Page from './Page';
    import { useNavigate } from 'react-router-dom';
    import context from './context';
    const Input = () => {
        
        const {name,setName} = useContext(context)

        const handle = (e) => {
          e.preventDefault()
          setName(e.target.value)
        }
        const navigate = useNavigate()
        const handleNext = (e) => {
            e.preventDefault()
            navigate('/page')
        
        }
    return (
        <div className='mt-3 flex gap-2 justify-center'>
          <input type="text" className="w-60 h-8 p-1 border-black border-2 rounded-md "placeholder="Enter your name" onChange={(e)=>handle(e)}/>
            <div onClick={handleNext} className=' p-1 rounded-md w-fit h-fit bg-yellow-300'>next</div>
        </div>
    )
    }
    export default Input
