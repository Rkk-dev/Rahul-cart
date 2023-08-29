import Color from "./Color";
import classes from "../../style/Colors.module.css";

const Colors = ({ colorObject }) => {
  const colorText = colorObject?.length > 1 ? "COLORS" : "COLOR";
  return (
    <section className={classes.availabelColors}>
      <div className={classes.title}>
        <span> {colorText} AVAILBLE</span>
      </div>
      <div className={classes.colors}>
        {colorObject.map((color) => {
          return (
            <Color
              key={color.code}
              colorId={color.code}
              colorName={color.name}
              colorImage={color.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Colors;
