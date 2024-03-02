import Thread from "./components/Thread";
import styles from "./components/components.module.sass";

export default function Threads() {
  return (
    <nav className={styles.threadsPanel}>
      <h1 className={styles.name}>Threads</h1>
      <div className={styles.threads}>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        <Thread amount={4}>Politics</Thread>
        
      </div>
    </nav>
  );
}
