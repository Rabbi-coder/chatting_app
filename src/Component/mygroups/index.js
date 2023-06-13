
import React from 'react'
import "./style.css"
import { AiOutlineSearch } from 'react-icons/ai';

const MyGroupList = () => {
    return (
        <><div className="mygrouplist">
        <div className="mygrouplist_header">
          <h2>My Group List</h2>
          <div className="mygrouplist_searchBoxes">
           <AiOutlineSearch/>
           <input type="text" placeholder='Search' />
          </div>
        </div>
        <div className="mygrouplist_body">
          <div className="mygrouplist_wrapper">
            <div className="mygrouplist_img">
              <img src="/Assetes/pp3.jpg" alt="avatar" />
            </div>
            <div className="mygrouplist_title">
              <h4>Tanjim Khan Anisha</h4>
              
            </div>
            <div className="mygrouplist_date">
            <p>Created at</p>
            <span>26.5.23</span>
            </div>
          </div><div className="mygrouplist_wrapper">
            <div className="mygrouplist_img">
              <img src="/Assetes/pp2.jpg" alt="avatar" />
            </div>
            <div className="mygrouplist_title">
              <h4>Ariful Islam Akash</h4>
              
            </div>
            <div className="mygrouplist_date">
            <p>Created at</p>
            <span>26.5.23</span>
            </div>

          </div>
        </div>
      </div></>
      )
}

export default MyGroupList