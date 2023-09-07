import React, { useEffect, useState } from "react";
import Style from "./Home.module.css";
import axios from "axios";
import Videocard from "../Components/Home/Videocard";

import Navbar from "../Components/Headers/Navbar";
const Home = () => {
  const [query, setquery] = useState("");
  const [data,setdata]=useState([])
  const [isloading,setisloading]=useState(false)
console.log(data)
  const getVideo = (q) => {
    setisloading(true)
    axios
      .get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${q}&&numResults=30`
      )
      .then((res) => {
        let r = res.data;
        setdata(r.results)
        setisloading(false)
      })
      .catch((err) => {
        console.log(err)
        setisloading(false)
      });

  }
  useEffect(() => {
    if (data.length === 0) {
      getVideo("fitness");
    }
  }, [data]);

  useEffect(() => {
    if (query ) {
      getVideo(query);
    }
  }, [query]);

  const handelQuery = (values) => {
    setquery(values);
  };

  return (
    <>
      <Navbar handelq={handelQuery} />
     
      <div className={Style.home}>
        
      {isloading?<p>Loading.....</p>:  <div className={Style.videocontener}>
          {data.map((el, index) => {
            return <Videocard key={index + "id"} obj={el} />;
          })}
        </div>}
      </div>
    </>
  );
};

export default Home;
