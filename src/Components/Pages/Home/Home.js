import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from '../../../axios';
import User from '../../Ui/User';

function Home() {

  const [ query, setQuery ] = useState("");
  const [ users, setUsers ] = useState([]);

  const handleQueryInput = (e) => {
      const value = e.target.value;
      setQuery(value);
  }

  const fetchUsers = async () => {
    try{
     const { data } = await axios.get("/search/users?q=" + query);
     return data?.items;
    }catch(err){
     console.log(err);
     return null;
    }
  }

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if(query){
      const items = await fetchUsers();
      setUsers(items);
    }else {
      console.log("Your query is empty");
    }
  }


  return (
    <div className='container'>
      <div className='search-form'>
        <h1>Github search user</h1>
        <form>
          <input value={query} onChange={handleQueryInput} type='text' />
          <button onClick={handleSearchUsers} >search</button>
        </form>
      </div>
      <div className='search-results'>
      { users ? users.map(user => {
        return <User user = {user} key={user.id} />
      }) : <h2>There is nothing to show..</h2> }
      </div>
    </div>
  )
}

export default Home