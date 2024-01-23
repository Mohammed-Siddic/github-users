import axios from '../../../axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Repo from '../../Ui/Repo';

const User = () => {
  const { login } = useParams();
  
  const [userInfo, setUserInfo] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(()=>{
   const fetchUserInformation = async () => {
    try{
        const response = await Promise.all([
            axios.get(`users/${login}`),
            axios.get(`users/${login}/repos`)
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
    }catch(err){
      console.log(err);
    }
   }
   fetchUserInformation();
  }, [])

  return (
    <div className='container'>
        <Link to="/" className='back'>Back</Link>
        <br />
       <div className='user-information'>
         <div className='image'>
          <img src={userInfo?.avatar_url} />
         </div>
         <div className='user-content'>
           <h2>{userInfo?.name}</h2>
           <p>{userInfo?.bio}</p>
           <p>
                <a href={userInfo?.html_url}>View Github Profile</a>
            </p>
           <div className='more-data'>
            <p>
            {userInfo?.followers} Followers.
            Following {userInfo?. following}
            </p>
            {userInfo?.location && <p>
            <strong>Location: </strong>   {userInfo?.location}
            </p> }
            {userInfo?.blog && (<p>
              {userInfo?.blog}
                </p>)}
           </div>
         </div>
       </div>
       <div className='user-repos'>
         {repos ? repos.map(repo => {
                return <Repo repo={repo} key={repo.id} />
            }) : <h3>No repos for this user...</h3> }
       </div>
    </div>
  )
}

export default User