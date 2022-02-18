import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}
interface UserDetailProps {
    user: User;
}
export default function UserDetail(props: UserDetailProps) {

    const router = useRouter();
    const { id } = router.query;
    const { user } = props;

    return (
        <Layout pageTitle="User Detail">
            <h1> User Detail {id}</ h1>
            {/* <Image src="/fawwaz.jpg" width={`150`} height={`150`} /> */}
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>
                <Link href={`/users`}>Back to Users</Link>
            </p>
        </Layout>
    )
}

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await response.json();

    const paths = dataUsers.map((user: User) => {
        return {
            params: {
                id: `${user.id}`,
            },
        };
    })

    return {
        paths,
        fallback: false,
    };
}

interface GetStaticProps {
    params: {
        id: string;
    }
}
export async function getStaticProps(context: GetStaticProps) {

    const { id } = context.params;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const user = await response.json();

    return {
        props: {
            user,
        }
    }

}