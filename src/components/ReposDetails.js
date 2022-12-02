import { useContext } from "react";
import { ReposContext } from "../context/ReposContext";

const ReposDetails = () => {
  const reposData = useContext(ReposContext);
  console.log(reposData);

  return (
    <>
      <div className="container">
        <div className="row">
          {reposData.map((data) => {
            return (
              <>
                <div key={data.id} className="col-md-4 p-5">
                  <h1>{data.name}</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ReposDetails;
