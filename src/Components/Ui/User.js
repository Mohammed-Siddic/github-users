import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
  const { avatar_url, login, id} = user;
  return (
    <div className='user'>
    <div className='image'> 
      <img src={avatar_url} alt={login} />
    </div>
    <div className='user-info'>
      <h2>{login}</h2>
      <strong>Id: </strong><span>{id}</span>
      <br />
      <br />
      <Link to={`/user/${login}`} >View Profile</Link>
    </div>
   </div>
  )
}

export default User;