import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

function Article({ article }) {
    return (
        <Link key={article.id} href={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default Article
