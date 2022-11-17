
import LeftNav from '../components/Nav/LeftNav'
import Log from '../components/Log'
import {  useSelector } from "react-redux";


import NewPostForm from "../components/Post/NewPostForm ";
import Thread from '../components/Thread';
import FriendsHint from '../components/Profil/FriendsHint';

const Home = () => {
  const auth = useSelector((state) => state.auth.auth)
  return (
    <div className="home">
      
      {auth ? <LeftNav/> : <span></span>}
      <div className="main">
        <div className="home-header">
        {auth ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        {auth ?<Thread />: <span></span>}
      </div>
      
      </div>
  )
}

export default Home
