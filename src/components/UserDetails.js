import { useContext } from "react";
import { GithubContext } from "../context/Usercontext";
import { MdLocationOn, MdOutlineLink } from "react-icons/md";

const UserDetails = () => {
  const data = useContext(GithubContext);
  const { name, userName, bio, location, twitterUsername, profilePicture } =
    data.userDetails;

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid my-auto pb-5  rounded-circle"
              width="50%"
              src={profilePicture}
              alt={name}
            />
            <p>
              <MdOutlineLink />
              {userName}
            </p>
          </div>
          <div className="col-md-6">
            <h1>{name}</h1>
            <p>{bio}</p>
            <p>
              <MdLocationOn />
              {location}
            </p>
            <p>Twitter: {twitterUsername}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
