import Link from 'next/link'
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div>
            <p
                className={styles.title}>made with love by
                <Link href={`https://www.instagram.com/fwzfrds/`}>
                    <a target="_blank"> @fwzfrds</a>
                </Link>
            </p>
        </div>
    )
}
