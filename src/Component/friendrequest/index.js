import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';
import "./style.css"

const FriendRequest = () => {

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
    <><div className="friendrequestlist">
      <div className="friendrequestlist_header">
        <h2>Friend request</h2>
        <div className="friendrequestlist_searchBoxes">
          <AiOutlineSearch />
          <input onChange={handleUserSearch} type="text" placeholder='Search' />
        </div>
      </div>
      <div className="friendrequestlist_body">

        {filterUser.length > 0 ? filterUser.map((item, i) => (
          <div className="friendrequestlist_wrapper" key={i}>
            <div className="friendrequestlist_img">
              <img src="/Assetes/pp3.jpg" alt="avatar" />
            </div>
            <div className="friendrequestlist_title">
              <h4>{item.username}</h4>

            </div>
            <div className="friendrequestlist_join">
              <Button variant="contained">Accept</Button>
              <Button variant="contained" color='error'>Reject</Button>
            </div>
          </div>
        )) :
          userlists.map((item, i) => (
            <div className="friendrequestlist_wrapper" key={i}>
              <div className="friendrequestlist_img">
                <img src="/Assetes/pp3.jpg" alt="avatar" />
              </div>
              <div className="friendrequestlist_title">
                <h4>{item.username}</h4>

              </div>
              <div className="friendrequestlist_join">
                <Button variant="contained">Accept</Button>
                <Button variant="contained" color='error'>Reject</Button>
              </div>
            </div>
          ))
        }



      </div>
    </div></>
  )
}

export default FriendRequest