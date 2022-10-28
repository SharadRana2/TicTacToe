import styles from "./Box.module.css";

const Box = (props) => {
  const index = props.index;
  const clickHandler = () => {
    props.click(index);
  };
  const value = props.val;
  return (
    <button
      className={`${styles.box} ${styles[value]}`}
      onClick={value === null && !props.gameOver ? clickHandler : null}
    >
      {props.children}
    </button>
  );
};
export default Box;
