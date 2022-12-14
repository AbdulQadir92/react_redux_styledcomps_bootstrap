import { useEffect } from "react"
import { connect } from 'react-redux'
import { fetchPosts } from "../store/actions/postsActions"

const Posts = ({ fetchPosts, posts }) => {
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts])

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {posts && posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.items
    }
}

export default connect(mapStateToProps, { fetchPosts })(Posts)