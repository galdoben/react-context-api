
import { useGlobalContext } from "../content/GlobalContext"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react"

const PostCard = () => {

    const { posts, fetchPosts } = useGlobalContext();
    const navigate = useNavigate()

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div>
            <div className="card">
                {posts.map((post) => (
                    <div key={post.id}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{post?.title}</h5>
                            <p className="card-text">{post?.content}</p>
                            <a href="#" className="btn btn-primary">Elimina</a>
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-warning" onClick={() => navigate(-1)}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostCard