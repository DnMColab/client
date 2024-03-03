import Post from "../../components/Post/Post";
import babich from "../../assets/Babich.jpg";
import styles from "./trends.module.sass";

export default function Trends() {
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum consequuntur quod nesciunt consequatur atque maiores et quae, reprehenderit temporibus commodi quos similique voluptatibus, magni laudantium ullam praesentium repudiandae rerum?";
  return (
    <article>
      <div className={styles.header}>
        <h1 className="nameArticle">Trends</h1>
      </div>
      <div className={styles.feed}>
        <Post
          author={{ avatar: babich, name: "Babich", nickname: "babach", id: 1 }}
          timestamp={new Date()}
          content={content}
          commentsCount={56}
          repostsCount={56}
          likesCount={56}
          id={1}
        />
        <Post
          author={{ avatar: babich, name: "Babich", nickname: "babach", id: 1 }}
          timestamp={new Date()}
          content={content}
          commentsCount={56}
          repostsCount={56}
          likesCount={56}
          id={1}
        />
        <Post
          author={{ avatar: babich, name: "Babich", nickname: "babach", id: 1 }}
          timestamp={new Date()}
          content={content}
          commentsCount={56}
          repostsCount={56}
          likesCount={56}
          id={1}
        />
        <Post
          author={{ avatar: babich, name: "Babich", nickname: "babach", id: 1 }}
          timestamp={new Date()}
          content={content}
          commentsCount={56}
          repostsCount={56}
          likesCount={56}
          id={1}
        />
        <Post
          author={{ avatar: babich, name: "Babich", nickname: "babach", id: 1 }}
          timestamp={new Date()}
          content={content}
          commentsCount={56}
          repostsCount={56}
          likesCount={56}
          id={1}
        />
        <Post
          author={{ avatar: babich, name: "Babich", nickname: "babach", id: 1 }}
          timestamp={new Date()}
          content={content}
          commentsCount={56}
          repostsCount={56}
          likesCount={56}
          id={1}
        />
      </div>
    </article>
  );
}
