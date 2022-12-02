import React, { useState, useEffect } from "react";
import axios from "axios";
export const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();
const GithubProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    userName: "",
    bio: "",
    location: "",
    twitterUsername: "",
    profilePicture: "",
  });
  const checkData = () => {
    axios(`${rootUrl}/users/iamrishavraj1`)
      .then(({ data }) => {
        const { name, login, bio, location, twitter_username, avatar_url } =
          data;
        setUserDetails({
          ...userDetails,
          name: name,
          userName: login,
          bio: bio,
          location: location,
          twitterUsername: twitter_username,
          profilePicture: avatar_url,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(checkData, []);

  return (
    <>
      <GithubContext.Provider value={{ userDetails }}>
        {children}
      </GithubContext.Provider>
    </>
  );
};

export { GithubContext, GithubProvider };
