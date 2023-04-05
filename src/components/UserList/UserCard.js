import React from 'react';
import {Link} from 'react-router-dom';


const UserCard = ({user}) => {
  return (
    <Link to={'/'+user.username}>
      <div className='flex items-center p-2 hover:bg-blue-50 rounded-2xl hover:font-semibold '>
        <img src={'/'+user.image} alt='' width={60} className='rounded-full' />
        <p className='font-Poppins text-[12px]'>{user.name}</p>
      </div>
    </Link>
  )
}

export default UserCard