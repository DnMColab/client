import Chapter, { TOption } from "../../components/Chapter/Chapter";
import styles from "./settings.module.sass";

export default function Settings() {
  const designAStyleOptions: TOption[] = [
    {
      name: "Contrast",
      description: "Show lines in interface",
      isActive: false
    },
    {
      name: "Black & White",
      description: "Show lines in interface",
      isActive: false
    },
    {
      name: "Big text",
      description: "Show lines in interface",
      isActive: true
    },
  ];

  return (
    <article>
      <div className={styles.header}>
        <h1 className="nameArticle">Settings</h1>
      </div>
      <div className={styles.content}>
        <Chapter name="Design & Style" options={designAStyleOptions}/>
      </div>
    </article>
  );
}
