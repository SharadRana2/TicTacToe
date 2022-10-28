import styles from "./Reset.module.css";

const Reset = (props) => {
  const clickHandler = () => {
    props.reset();
  };
  return (
    <button className={styles.reset} onClick={clickHandler}>
      Start a new Game
    </button>
  );
};
export default Reset;
