import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./style.css"
import { AiOutlineSearch } from 'react-icons/ai';
import { getDatabase, ref, onValue, set, push, remove, orderByChild } from "firebase/database";
import { useSelector } from 'react-redux';

const FriendsSuggestion = () => {
  const [userlists, setuserLists] = useState([])
  const user = useSelector((users) => users.login.loggedIn)
  const [filterUser, setfilterUser] = useState([])
  const [frndreq, setFrndReq] = useState([])
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



  // send friend request//

  const handleSendRequest = (item) => {
    set(push(ref(db, 'friendrequest')), {
      sendername: user.displayName,
      senderid: user.uid,
      recivername: item.username,
      reciverid: item.id
    });
  }


  //friend request show//

  useEffect(() => {
    const starCountRef = ref(db, "friendrequest");
    onValue(starCountRef, (snapshot) => {
      let friendrequestArray = []
      snapshot.forEach((item) => {
        friendrequestArray.push(item.val().reciverid + item.val().senderid)
      })
      setFrndReq(friendrequestArray)
    });
  }, [])

  //request cancel//


  const handleCancelReq = (item) => {
    remove(ref(db, 'friendrequest/'), {
      sendername: user.displayName,
      senderid: user.uid,
      recivername: item.username,
      reciverid: item.id
    });

  }


  return (

    <><div className="friendsuggestion">
      <div className="friendsuggestion_header">
        <h2>Add Friends</h2>
        <div className="friendsuggestion_searchBoxes">
          <AiOutlineSearch />
          <input onChange={handleUserSearch} type="text" placeholder='Search' />
        </div>
      </div>
      <div className="friendsuggestion_body">
        {
          filterUser.length > 0 ? filterUser.map((item, i) => (
            <div className="friendsuggestion_wrapper" key={i}>
              <div className="friendsuggestion_img">
                <img src="/Assetes/pp3.jpg" alt="avatar" />
              </div>
              <div className="friendsuggestion_title">
                <h4>{item.username}</h4>

              </div>
              <div className="friendsuggestion_join">
                <Button variant="contained">Add</Button>
              </div>
            </div>
          ))
            : userlists.map((item, i) => (
              <div className="friendsuggestion_wrapper" key={i}>
                <div className="friendsuggestion_img">
                  <img src="/Assetes/pp3.jpg" alt="avatar" />
                </div>
                <div className="friendsuggestion_title">
                  <h4>{item.username}</h4>

                </div>
                <div className="friendsuggestion_join">
                  {
                    frndreq.includes(item.id + user.uid) || frndreq.includes(user.uid + item.id) ? (
                      <Button color='error' variant="contained" onClick={() => handleCancelReq(item)} >Cancel</Button>
                    ) : (
                      <Button variant="contained" onClick={() => handleSendRequest(item)}>Add</Button>
                    )
                  }

                </div>
              </div>
            ))
        }
      </div>
    </div></>

  )
}


export default FriendsSuggestion