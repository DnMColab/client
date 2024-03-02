import { useParams } from "react-router-dom";
import styles from "./profile.module.sass";
import babich from "../../assets/Babich.jpg";
import Post from "../../components/Post/Post";

interface IUser {
  name: string;
  nickname: string;
  followers: number;
  following: number;
  avatar: string;
}
export default function Profile() {
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum consequuntur quod nesciunt consequatur atque maiores et quae, reprehenderit temporibus commodi quos similique voluptatibus, magni laudantium ullam praesentium repudiandae rerum?";

  const { id } = useParams();
  console.log(id);
  const user: IUser = {
    name: "Babich",
    nickname: "babach",
    followers: 5,
    following: 5,
    avatar: babich,
  };
  return (
    <article>
      <div className={styles.header}>
        <h1 className="nameArticle">Profile</h1>
      </div>
      <div className={styles.content}>
        <img src={user.avatar} alt="Avatar" className={styles.avatar} />
        <h2>{user.name}</h2>
        <h3>{user.nickname}</h3>
        <div>
          <h3>Followers: {user.followers}</h3>
          <h3>Following: {user.following}</h3>
        </div>
        <div className={styles.sorting}>
          <button className="latest">Latest posts</button>
          <button className="best">Best posts</button>
          <button className="comments">Comments</button>
          <button className="follows">Follows</button>
        </div>
        <div className={styles.posts}>
          <Post
            author={{
              avatar: babich,
              name: "Babich",
              nickname: "babach",
              id: 1,
            }}
            timestamp={new Date()}
            content={content}
            commentsCount={56}
            repostsCount={56}
            likesCount={56}
            id={1}
          />
          <Post
            author={{
              avatar: babich,
              name: "Babich",
              nickname: "babach",
              id: 1,
            }}
            timestamp={new Date()}
            content={content}
            commentsCount={56}
            repostsCount={56}
            likesCount={56}
            id={1}
          />
          <Post
            author={{
              avatar: babich,
              name: "Babich",
              nickname: "babach",
              id: 1,
            }}
            timestamp={new Date()}
            content={content}
            commentsCount={56}
            repostsCount={56}
            likesCount={56}
            id={1}
          />
        </div>
      </div>
    </article>
  );
}
