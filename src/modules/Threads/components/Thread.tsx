import styles from "./components.module.sass";

interface IThread {
    children: React.ReactNode
    amount: number
}

export default function Thread({children, amount}: IThread) {
    return (
        <div className={styles.thread}>
            <h1 className={styles.symbol}>#</h1>
            <div className={styles.content}>
                <h2 className={styles.contentName}>{children}</h2>
                <p className={styles.contentAmount}>{amount} threads</p>
            </div>
        </div>
    )
}