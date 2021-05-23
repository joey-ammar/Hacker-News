import classes from "./News.module.css";

/**News function */
const News = (props) => {
  /* Render */

  return (
    <>
      {/* main wrapper */}
      <div className={classes.Main}>
        {/* main news */}
        <div className={classes.News}>
          {/* news inside */}
          <div className={classes.NewsInside}>
            {/* main Top */}
            <div className={classes.NewsInsideTop}>
              <small>{props.num} .</small>
              <i className="fas fa-caret-up"></i>
              <h1>{props.title}</h1>
              <a href={props.url}>(Continue)</a>
            </div>
            {/* main bottom */}
            <div className={classes.NewsInsideBottom}>
              <p>{props.points} points by </p>
              <small>{props.author}</small>
              <p>{props.created_at.slice(0, 10)}</p>
              <small>| hide |</small>
              <p>{props.num_comments} comments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
