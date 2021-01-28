import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'

function Layout({ children }) {
    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout