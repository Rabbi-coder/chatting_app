import React from 'react'
import "./style.css"
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '@mui/material/Button';

const GroupList = () => {
  return (
    <>
    <div className="grouplist">
      <div className="grouplist_header">
        <h2>Grouplist</h2>
        <div className="grouplist_searchBoxes">
         <AiOutlineSearch/>
         <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="grouplist_body">
        <div className="grouplist_wrapper">
          <div className="grouplist_img">
            <img src="/Assetes/pp1.jpg" alt="avatar" />
          </div>
          <div className="grouplist_title">
            <h4>Code Worms Society</h4>
            <span>We live in codes</span>
          </div>
          <div className="grouplist_join">
          <Button variant="contained">Join</Button>
          </div>
        </div><div className="grouplist_wrapper">
          <div className="grouplist_img">
            <img src="/Assetes/pp2.jpg" alt="avatar" />
          </div>
          <div className="grouplist_title">
            <h4>Code Worms Society</h4>
            <span>We live in codes</span>
          </div>
          <div className="grouplist_join">
          <Button variant="contained">Join</Button>
          </div>
        </div><div className="grouplist_wrapper">
          <div className="grouplist_img">
            <img src="/Assetes/pp3.jpg" alt="avatar" />
          </div>
          <div className="grouplist_title">
            <h4>Code Worms Society</h4>
            <span>We live in codes</span>
          </div>
          <div className="grouplist_join">
          <Button variant="contained">Join</Button>
          </div>
        </div><div className="grouplist_wrapper">
          <div className="grouplist_img">
            <img src="/Assetes/pp2.jpg" alt="avatar" />
          </div>
          <div className="grouplist_title">
            <h4>Code Worms Society</h4>
            <span>We live in codes</span>
          </div>
          <div className="grouplist_join">
          <Button variant="contained">Join</Button>
          </div>
        </div><div className="grouplist_wrapper">
          <div className="grouplist_img">
            <img src="/Assetes/pp2.jpg" alt="avatar" />
          </div>
          <div className="grouplist_title">
            <h4>Code Worms Society</h4>
            <span>We live in codes</span>
          </div>
          <div className="grouplist_join">
          <Button variant="contained">Join</Button>
          </div>
        </div><div className="grouplist_wrapper">
          <div className="grouplist_img">
            <img src="/Assetes/pp2.jpg" alt="avatar" />
          </div>
          <div className="grouplist_title">
            <h4>Code Worms Society</h4>
            <span>We live in codes</span>
          </div>
          <div className="grouplist_join">
          <Button variant="contained">Join</Button>
          </div>
        </div><div className="grouplist_wrapper">
          <div className="grouplist_img">
            <img src="/Assetes/pp2.jpg" alt="avatar" />
          </div>
          <div className="grouplist_title">
            <h4>Code Worms Society</h4>
            <span>We live in codes</span>
          </div>
          <div className="grouplist_join">
          <Button variant="contained">Join</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default GroupList