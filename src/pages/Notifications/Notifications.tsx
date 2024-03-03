import styles from "./not.module.sass";
import Message from "./components/Message";
import babich from "../../assets/Babich.jpg";

export default function Notifications() {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ...";
  return (
    <article>
      <div className={styles.header}>
        <h1 className="nameArticle">Notifications</h1>
      </div>
      <div className={styles.content}>
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
        <Message
          author={{ id: 1, name: "Babich", avatar: babich }}
          id={1}
          timestamp={new Date()}
          content={content}
        />
      </div>
    </article>
  );
}
