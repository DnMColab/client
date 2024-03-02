import { relativer } from "../../functions/time";
import styles from "./post.module.sass";
import screenshot from "../../assets/icons/camera.svg";
import comments from "../../assets/icons/message.svg";
import repost from "../../assets/icons/repost.svg";
import like from "../../assets/icons/like.svg";
import { Link } from "react-router-dom";

interface IPost {
  author: {
    avatar: string;
    name: string;
    nickname: string;
    id: number;
  };
  timestamp: Date;
  content: string;
  commentsCount: number;
  repostsCount: number;
  likesCount: number;
  id: number;
}
export default function Post({
  author,
  timestamp,
  content,
  commentsCount,
  repostsCount,
  likesCount,
  id,
}: IPost) {
  return (
    <div id={"post" + id} className={styles.post}>
      <div className="avatar">
        <Link to={"/profile/" + author.id}>
          <img src={author.avatar} alt="avatar" className={styles.avatar} />
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <div className={styles.contentName}>{author.name}</div>
          <div className={styles.contentNickname}>@{author.nickname}</div>
          <div className={styles.contentTimestamp}>{relativer(timestamp)}</div>
        </div>
        <div className="middle">{content}</div>
        <div className={styles.bottom}>
          <div className="screenshot">
            <img src={screenshot} />
          </div>
          <div className="comments">
            <img src={comments} />
            <span>{commentsCount}</span>
          </div>
          <div className="reposts">
            <img src={repost} />
            <span>{repostsCount}</span>
          </div>
          <div className="like">
            <img src={like} />
            <span>{likesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
