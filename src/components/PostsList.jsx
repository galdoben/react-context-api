import { use } from "react";
import { useGlobalContext } from "../content/GlobalContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"


const PostsList = () => {
    const { posts, fetchPosts } = useGlobalContext();

    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <div>
            <ul className="list-group">
                {posts.map((post) =>
                    <div key={post.id}>
                        <li className="list-group-item">{post.title}
                            <Link type="link" className="btn btn-info px-3" to={`/card/${post.id}`}>Info</Link>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default PostsList