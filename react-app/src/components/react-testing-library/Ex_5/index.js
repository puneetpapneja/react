import React from 'react'
import imgComponent from '../../../assets/images/react-testing-library/screen-5.png';
import imgTestCase from '../../../assets/images/react-testing-library/test-screen-5.png';
import imgTestCase2 from '../../../assets/images/react-testing-library/test-2-screen-5.png';
import './style.css';

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
               <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h2>Component</h2>
                        <img src={imgComponent} />
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <h2>Test Case</h2>
                            <img src={imgTestCase} />
                        </div>
                        <div className="col-md-12">
                            <h2>Test Case with mock data</h2>
                            <img src={imgTestCase2} />
                        </div>
                    </div>
                </div>
            </div>)
    }
}