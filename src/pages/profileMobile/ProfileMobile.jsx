import "./profileMobile.css";
import {
  OrangeButton,
  PostElement,
  ProfileInfo,
  ProfileInfoEdit,
  ProfileStatistics,
  TabBar,
} from "../../components";
import { Navbar, SmallPostCard } from "../../components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const ProfileMobile = () => {
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const [showProfileInfoEdit, setShowProfileInfoEdit] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [activeTab, setActiveTab] = useState(
    <ProfileInfo setShowProfileInfoEdit={setShowProfileInfoEdit} />
  );

  const handleTabClick = (tab) => {
    switch (tab) {
      case "info":
        setActiveTab(
          <ProfileInfo setShowProfileInfoEdit={setShowProfileInfoEdit} />
        );
        break;
      case "car":
        setActiveTab(
          <div className="wd-profile--your-posts-wrapper" id="style-7">
            <div className="wd-profile--your-posts">
              <p className="wd-profile--your-posts-title">Your posts</p>
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <SmallPostCard key={post._id} post={post} />
                ))
              ) : (
                <>
                  <p className="wd-profile--your-posts-no-posts">
                    You have no posts
                  </p>
                  <Link to={"/add-post"}>
                    <OrangeButton
                      className="wd-profile--your-posts-no-posts-button"
                      text={"Add post"}
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
        );
        break;
      case "like":
        setActiveTab(
          <div className="wd-profile--liked-posts-wrapper" id="style-7">
            <p className="wd-profile--liked-posts-title">Liked posts</p>
            <div className="wd-profile--liked-posts">
              {likedPosts.length > 0 ? (
                likedPosts.map((post) => (
                  <PostElement key={post._id} post={post} />
                ))
              ) : (
                <>
                  <p className="wd-profile--liked-posts-no-posts">
                    You have no liked posts
                  </p>
                  <Link
                    to={"/search-options"}
                    className="wd-profile--liked-posts-no-posts-offer"
                  >
                    <p>Check what our hosts have to offer</p>
                    <IoIosArrowForward size={20} />
                  </Link>
                </>
              )}
            </div>
          </div>
        );
        break;
      case "stats":
        setActiveTab(<ProfileStatistics />);
        break;
      case "settings":
        break;
      default:
        setActiveTab(
          <ProfileInfo setShowProfileInfoEdit={setShowProfileInfoEdit} />
        );
    }
  };

  useEffect(() => {
    if (userInfo._id === undefined) {
      return;
    }
    const fetchLikedPosts = async () => {
      const res = await axios.get(`posts/liked/${userInfo._id}`);
      setLikedPosts(res.data);
    };
    const fetchUserPosts = async () => {
      const res = await axios.get(`posts/profile/${userInfo._id}`);
      setUserPosts(res.data);
    };
    fetchUserPosts();
    fetchLikedPosts();
  }, [userInfo._id]);

  return (
    <div className="wd-profile2">
      <div className="wd-profile2-wrapper">
        <Navbar />
        {activeTab}
      </div>
      <TabBar onTabClick={handleTabClick} />
      {showProfileInfoEdit && (
        <ProfileInfoEdit setShowProfileInfoEdit={setShowProfileInfoEdit} />
      )}
    </div>
  );
};

export default ProfileMobile;
