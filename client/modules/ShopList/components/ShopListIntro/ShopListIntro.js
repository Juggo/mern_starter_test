import React, { Component, PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';

//function PostList(props) {
class PostList extends Component {
  
  render() {
    return (
      <div className="listView">
        {
          this.props.posts.map(post => (
            <PostListItem
              post={post}
              key={post.cuid}
              onDelete={() => this.props.handleDeletePost(post.cuid)}
            />
          ))
        }
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
