import Link from 'next/link'
import Layout from '../../components/Layout'
import { useRouter } from "next/router"
import styles from "../../styles/User.module.css"

interface UsersProps {
    dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {

    const { dataUsers } = props;
    const router = useRouter();

    return (
        <Layout pageTitle="Users Page">
            <h1>Welcome to Users Page</h1>
            {dataUsers.map(user => {
                return (
                    <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card} >
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
            <p>
                <Link href={`/users/detail`}>See Details</Link>
            </p>
        </Layout>
    )
}

export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await response.json();

    return {
        props: {
            dataUsers,
        },
    };
}
