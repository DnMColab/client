import styles from "./chapter.module.sass";
import Toggle from "../Toggle/Toggle";

export type TOption = {
  name: string;
  description: string;
  isActive: boolean;
};
interface IChapter {
  name: string;
  options: TOption[];
}
export default function Chapter({ name, options }: IChapter) {
  return (
    <div className={styles.chapter}>
      <div className={styles.top}>
        <h1>{name}</h1>
        <div className="arrow">V</div>
      </div>
      <div className={styles.bottom}>
        {options.map((option: TOption) => {
          return (
            <div key={option.name} className={styles.option}>
              <div className={styles.optionInfo}>
                <p>{option.name}</p>
                <p>{option.description}</p>
              </div>
              <div className="optionToggle">
                <Toggle name={option.name} isActive={option.isActive}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
