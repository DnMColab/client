import styles from "./search.module.sass";
import glass from "../../assets/icons/search.svg";
import Post from "../../components/Post/Post";
import babich from "../../assets/Babich.jpg";

export default function Search() {
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum consequuntur quod nesciunt consequatur atque maiores et quae, reprehenderit temporibus commodi quos similique voluptatibus, magni laudantium ullam praesentium repudiandae rerum?";

  return (
    <article>
      <div className={styles.header}>
        <h1 className="nameArticle">Search</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.input}>
          <div className={styles.glass}>
            <img src={glass} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.sorting}>
          <button className="users">users</button>
          <button className="hashtag">hashtags</button>
          <button className="posts">posts</button>
          <button className="answers">answers</button>
        </div>
        <div className={styles.result}>
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
          {/* There must be the result */}
        </div>
      </div>
    </article>
  );
}
