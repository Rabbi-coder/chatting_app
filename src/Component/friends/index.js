import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';
import "./style.css"


const Friends = () => {

  const [filterUser, setfilterUser] = useState([])
  const [userlists, setuserLists] = useState([])
  const user = useSelector((users) => users.login.loggedIn)
  const db = getDatabase();



  useEffect(() => {
    const starCountRef = ref(db, "users");
    onValue(starCountRef, (snapshot) => {
      let userArray = []
      snapshot.forEach((userLists) => {
        if (user.uid != userLists.key) {
          userArray.push({ ...userLists.val(), id: userLists.key })
        }
      })
      setuserLists(userArray)
    });
  }, [])






  const handleUserSearch = (e) => {
    let arr = []
    if (e.target.value.length == 0) {
      setfilterUser([])
    }
    userlists.filter((item) => {
      if (item.username.toLowerCase().includes(e.target.value.toLowerCase())) {
        arr.push(item)
        setfilterUser(arr)
      }
    })
  }






  return (
    <><div className="friends">
      <div className="friends_header">
        <h2>Friends</h2>
        <div className="friends_searchBoxes">
          <AiOutlineSearch />
          <input onChange={handleUserSearch} type="text" placeholder='Search' />
        </div>
      </div>
      <div className="friends_body">
        {
          filterUser.lenght > 0 ? filterUser.map((item, i) => (
            <div className="friends_wrapper" key={i}>
              <div className="friends_img">
                <img src="/Assetes/pp3.jpg" alt="avatar" />
              </div>
              <div className="friends_title">
                <h4>{item.username}</h4>

              </div>
              <div className="friends_join">
                <Button variant="contained" color='error'>block</Button>
              </div>
            </div>
          )) :
            userlists.map((item, i) => (
              <div className="friends_wrapper" key={i}>
                <div className="friends_img">
                  <img src="/Assetes/pp3.jpg" alt="avatar" />
                </div>
                <div className="friends_title">
                  <h4>{item.username}</h4>

                </div>
                <div className="friends_join">
                  <Button variant="contained" color='error'>block</Button>
                </div>
              </div>
            ))
        }

      </div>
    </div></>
  )
}

export default Friends