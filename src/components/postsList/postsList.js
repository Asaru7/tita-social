import React from 'react';
import axios from 'axios';

export default class PostsList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://dummyapi.io/data/v1/post?limit=10`)
      .then(res => {
        const posts = res.data;
        console.log(posts);
      })
  }
}
/*
  render() {
  this.setState({ posts });

    return (
      <ul>
        {
          this.state.posts
            .map(posts =>
              <li key={posts.id}>{posts.name}</li>
            )
        }
      </ul>
    )
  }
} */