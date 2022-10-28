import styles from "./Headings.module.css";
import Reset from "./Reset";
const Headings = (props) => {
  return (
    <div>
      <span className={styles.heading}>
        Let's play the
        <br /> TIC TAC TOE <br />
        Game!
      </span>
      <Reset reset={props.click} />
    </div>
  );
};
export default Headings;
