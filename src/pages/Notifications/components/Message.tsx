import { relativer } from "../../../functions/time";
import dots from "../../../assets/icons/dots.svg";
import styles from "./components.module.sass";
import { Link } from "react-router-dom";

interface IMessage {
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  id: number;
  timestamp: Date;
  content: string;
}
export default function Message({ author, id, timestamp, content }: IMessage) {
  return (
    <div className={styles.message} id={"notification"+id}>
      <div className={styles.left}>
        <Link to={"/profile/"+author.id}><img src={author.avatar} alt={"avatar of " + author.name} /></Link>
      </div>
      <div className={styles.middle}>
        <span className={styles.name}>{author.name}</span> posted: "{content}"
      </div>
      <div className={styles.right}>
        <p>{relativer(timestamp)}</p>
        <div className="dots"><img src={dots} alt="actions with notification" /></div>
      </div>
    </div>
  );
}
