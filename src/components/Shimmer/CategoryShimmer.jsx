import classes from "./CategoryShimmer.module.css";
const CategoryShimmer = () => {
  return (
    <div className={classes.parent}>
      {Array(16)
        .fill("")
        .map((item, index) => {
          return <div key={index} className={classes.child}></div>;
        })}
    </div>
  );
};

export default CategoryShimmer;
