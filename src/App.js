/**
 * Importing
 * */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import News from "./components/News/News";
import classes from "./App.module.css";
/**
 * App
 */
const App = () => {
  /**
   * State
   */
  const [loader, setLoader] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  /**
   * useEffect
   */

  useEffect(() => {
    const axFnx = async () => {
      setLoader(true);
      /**Axios call of API */
      await axios
        .get(
          `http://hn.algolia.com/api/v1/search?query=${inputValue}&tags=story`
        )
        .then((response) => setData(response.data.hits))
        .catch((err) => console.log(err));
      setLoader(false);
    };
    axFnx();
  }, [inputValue]);
  // console.log(inputValue);
  // console.log(data);
  /**
   * return
   */
  return (
    <div className="App">
      {loader ? (
        <>
          <Navbar />
          <Search theInputValue={(inputValue) => setInputValue(inputValue)} />

          <div className={classes.Loading}>
            <div className={classes.Container}>
              <i className="fas fa-spinner"></i>
              <h1>Loading</h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Search theInputValue={(inputValue) => setInputValue(inputValue)} />

          {data.length > 0 ? (
            data.map((e, index) => {
              return (
                <>
                  <News {...e} num={++index} key={index} />
                </>
              );
            })
          ) : (
            <>
              <div className={classes.News}>
                <div className={classes.NewsInside}>
                  <h1>No News Found</h1>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
/**
 * Exporting!
 */
export default App;
