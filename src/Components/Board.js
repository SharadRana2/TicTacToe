import Box from "./Box";
import styles from "./Board.module.css";

const Board = (props) => {
  const board = props.value;
  return (
    <>
      <div className={styles.board}>
        {board.map((item, idx) => {
          return (
            <Box
              val={item}
              key={idx}
              index={idx}
              click={props.click}
              gameOver={props.gameover}
            >
              {item}
            </Box>
          );
        })}
      </div>
      {props.gameover && (
        <div className={styles.showwinner}>Player {props.winner} Won!</div>
      )}
    </>
  );
};
export default Board;
