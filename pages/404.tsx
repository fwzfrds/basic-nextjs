import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function Custom404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // console.log('dipanggil setelah 5 detik');
            router.push('/');
        }, 5000)
    }, [])


    return (
        <div className="container404">
            <h1 className="title404">Ooops...</h1>
            <h1 className="title404">Halaman yang ada cari tidak ditemukan</h1>
            <h3 className="title404"><Link href={`/`}>kembali ke home</Link></h3>
        </div>
    )
}
