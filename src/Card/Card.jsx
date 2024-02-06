import styles from "./Card.module.css";
import CardImg from "../assets/avatar-jessica.jpeg";
const Card = () => {
  return (
    <div className={styles.Card}>
      <img src={CardImg} className={styles.CardImg} />
      <h2>Jessica Randell</h2>
      <p className={styles.Location}>London, United Kingdom</p>
      <p>&ldquo;Front-end developer and avid reader.&ldquo;</p>
      <div className={styles.Button}>
        <button>GitHub</button>
        <button>Frontend Mentor</button>
        <button>Linkedin</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
};
export default Card;
