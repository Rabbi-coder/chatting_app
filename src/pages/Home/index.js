import React from "react";
import Grid from '@mui/material/Grid';
import "./style.css"
import GroupList from "../../Component/Grouplist";
import FriendRequest from "../../Component/friendrequest";
import Friends from "../../Component/friends";
import MyGroupList from "../../Component/mygroups";
import FriendsSuggestion from "../../Component/friendsuggestion";
import BlockUsers from "../../Component/blockusers";


const Home = () => {
  
  return (
    <>
    <Grid container className="home_pages" >
    <Grid className="home_items" item xs={4 }>
      <GroupList/>
      <FriendRequest/>
    </Grid>
    <Grid className="home_items" item xs={4}>
      <Friends/>
      <MyGroupList/>
    </Grid>
    <Grid className="home_items" item xs={4}>
      <FriendsSuggestion/>
      <BlockUsers/>
    </Grid>
  </Grid>
  </>
  );
};

export default Home;
