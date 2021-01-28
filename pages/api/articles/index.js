import {articles} from '../../../data'

function handler(req, res) {
    res.status(200).json(articles)
}

export default handler
