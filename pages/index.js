import ArticleList from "../components/ArticleList"
import {server} from '../config'

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    // const res = await fetch(`${server}/api/articles?_limit=6`)
    const articles = await res.json()
    return {
        props:{
            articles
        }
    }
}

export default function Home({articles}) {
    return (
        <div>
            <ArticleList articles={articles}/>
        </div>
    )
}

