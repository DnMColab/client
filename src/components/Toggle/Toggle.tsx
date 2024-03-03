import { useState } from "react";
import styles from "./toggle.module.sass";

export default function Toggle({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) {
  const [isActivated, setActive] = useState<boolean>(isActive);
  console.log(name, isActivated);
  return (
    <div
      className={isActivated ? styles.toggle : styles.activeToggle}
      onClick={() => setActive((pr) => !pr)}
    >
      <input
        type="hidden"
        name={name}
        value={isActivated ? "true" : "false"}
        style={{ display: "none" }}
      />
      <div className={styles.dot}></div>
    </div>
  );
}
