import styles from "./Header.module.css";

const Footer = (props) => {
  let turn = props.turn;

  return (
    <>
      <div className={styles.player}>
        <div
          className={
            turn === true ? `${styles.top} ${styles.playing}` : styles.top
          }
        >
          PLAYER X<br />
          {props.scores.xscore}
        </div>
        <div
          className={
            turn === true ? styles.top : `${styles.top} ${styles.playing}`
          }
        >
          PLAYER O<br />
          {props.scores.oscore}
        </div>
      </div>
    </>
  );
};
export default Footer;
