import classes from "./Search.module.css";

const Search = (props) => {
  return (
    <>
      <div className={classes.inputWrapper}>
        <div className={classes.insideInputWrapper}>
          <input type="text" placeholder="search the news" />
          <button
            onClick={() => {
              if (document.querySelector("input").value === "") {
                return;
              }
              props.theInputValue(document.querySelector("input").value);
              document.querySelector("input").value = "";
            }}
            className={classes.btn1}
          >
            search
          </button>
        </div>
      </div>
    </>
  );
};
export default Search;
