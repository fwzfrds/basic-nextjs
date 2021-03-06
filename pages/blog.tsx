import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/Blog.module.css"

interface Post {
    id: number;
    title: string;
    body: string;
}
interface BlogProps {
    dataBlog: Post[]
}
export default function blog(props: BlogProps) {

    const { dataBlog } = props;

    return (
        <Layout pageTitle="Blog Page">
            <h1>Blog Page</h1>
            {dataBlog.map((blog) => {
                return (
                    <div key={blog.id} className={styles.card} >
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                )
            })}
        </Layout>

    )
}

export async function getServerSideProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await response.json();

    return {
        props: {
            dataBlog,
        }
    }
}