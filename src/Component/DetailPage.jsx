import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetailPage = () => {
  const navigate = useNavigate()
  return (
    <div className='dashboard'>
    <div className=' nav-border-flex-2'>
    <div className='search-flex-2'>
        <div className='y-logo'>Y</div>
        <div className='bold'>Hackers News</div>
        <div className=''>Hackers News</div>
        <div className=''>News</div>
        <div className=''>Post</div>
        <div className=''>Comments</div>
        <div className=''>Ask</div>
        <div className=''>Show</div>
        <div className=''>Jobs</div>
        <div className=''>Submit</div>
        
    </div>
    <div>
      <div onClick={()=> navigate('/login')}>Login</div>
    </div>
    </div>
    <div className='detailPage'>
      <h2> This is the detail page </h2>
    </div>
    </div>
  )
}

export default DetailPage