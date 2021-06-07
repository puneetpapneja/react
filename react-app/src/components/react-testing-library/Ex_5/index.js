import React from 'react'

export default class Ex_5 extends React.Component {

    constructor(props) {
        super(props)
        this.state = { posts: []}
    }

    getPosts = () => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => this.setState({posts: data}))
    }

    componentDidMount(){
        this.getPosts()
    }

    renderPosts(){
        const {posts} = this.state
        return posts.map((post,idx)=> {
                return (<div role="posts" key={idx}>
                            <p>
                                <b>ID:</b> {post.id} <br />
                                <b>Body:</b> {post.body} <br />
                                <b>Title:</b> {post.title} <br />
                            </p>
                        </div>)
        } )
    }

    render(){
        const {posts } = this.state
        return (<div>
                <h1>Example 5</h1>
                <h2>Test case for fetch posts from API and validate posts is redering without any error</h2>
                <b>Total Posts  </b>{posts.length} <br />
                {!posts.length && <h2>No posts found</h2>}
               {posts.length && this.renderPosts() }
            </div>)
    }
}