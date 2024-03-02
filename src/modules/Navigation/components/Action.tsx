import { Link } from "react-router-dom";
import styles from "./components.module.sass";

interface IACtion {
  img: string;
  children: React.ReactNode
  link: string;
  size?: 'small' | 'big'
}

export default function Action({ img, link, children, size="big" }: IACtion) {
  return (
    <Link to={link} className={size === 'small' ? styles.actionSmall : styles.action}>
      <img src={img} />
      <span>{children}</span>
    </Link>
  );
}
