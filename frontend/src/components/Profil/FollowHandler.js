import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../redux/userSlice";
import { isEmpty } from "../Utils";

const FollowHandler = ({ idToFollow }) => {
  const userData = useSelector((state) => state.auth.user);
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser({followerId:userData._id, idToFollow}));
    setIsFollowed(true);
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser({followerId:userData._id, idToFollow}));
    setIsFollowed(false);
  };

  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsFollowed(true);
      } else setIsFollowed(false);
    }
  }, [userData, idToFollow]);

  return (
    <>
      {isFollowed && !isEmpty(userData) && (
        <span onClick={handleUnfollow}>
          <button className="unfollow-btn">Abonné</button>
        </span>
      )}
      {isFollowed === false && !isEmpty(userData) && (
        <span onClick={handleFollow}>
          <button className="follow-btn">Suivre</button>
        </span>
      )}
    </>
  );
};

export default FollowHandler;