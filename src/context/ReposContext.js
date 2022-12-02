import React, { useState, useEffect } from "react";
import axios from "axios";
import { rootUrl } from "./Usercontext";
import Pagination from "../components/Pagination";

const ReposContext = React.createContext();
const ReposProvider = ({ children }) => {
  const [reposDetails, setReposDetails] = useState([]);
  const getReposData = (currentPage) => {
    axios(`${rootUrl}/users/iamrishavraj1/repos?per_page=5&page=${currentPage}`)
      .then(({ data }) => {
        setReposDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePageClick = (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    getReposData(currentPage);
  };

  useEffect(getReposData, []);

  return (
    <>
      <ReposContext.Provider value={reposDetails}>
        {children}
      </ReposContext.Provider>
      <Pagination handleClick1={handlePageClick} />
    </>
  );
};

export { ReposContext, ReposProvider };
