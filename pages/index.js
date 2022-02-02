import Head from 'next/head'
import NavigationBar from "../components/NavigationBar/index"
import Footer from "../components/Footer/index"
import { Jumbotron } from "react-bootstrap";
import Image from 'next/image'


export default function Home() {
    return (
        <div>
            <Head>
                <title>Main Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <NavigationBar />

                <div>
                    <Jumbotron>
                        <h1>Home</h1>
                    </Jumbotron>
                </div>

                <div>
                <Image src="/home.png" width={600} height={240}/>
                </div>

            </main>

            <div id="footer" >
                <Footer />
            </div>

        </div>

    );
}
