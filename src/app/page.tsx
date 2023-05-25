import Image from 'next/image'
import Main from './components/Main'
import Header from './components/Header'
import Head from 'next/head'
import About from './components/About'
import Skills from './components/Skills'

export default function Home(): JSX.Element {
    return (
        <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-slate-200">
            <Head>
                <title>Mert Eyüboğlu</title>
            </Head>
            <Header />
            <section>
                <Main />
            </section>
            <section className="h-screen snap-start items-center space-y-8 overflow-hidden ">
                <About />
            </section>
            <section className="h-screen snap-start items-center space-y-8 overflow-hidden ">
                <Skills />
            </section>
        </div>
    )
}
