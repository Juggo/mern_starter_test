import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Form Style
//import styles from '../../components/PostCreateWidget/PostCreateWidget.css';

// Import Components
import ShopListList from '../../components/ShopListList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
import ShopListIntro from '../../components/ShopListIntro/ShopListIntro';
import ShopListSearch from '../../components/ShopListSearch/ShopListSearch';

// Import Actions
import { toggleAddPost } from '../../../App/AppActions';
import { addPostRequest, fetchPosts, deletePostRequest, fetchPostsByFilter } from '../../PostActions';
import { addShopListRequest, fetchShopLists, fetchShopListsByFilter } from '../../ShopListActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getShopLists } from '../../ShopListReducer';

class ShopListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchShopLists());
  }

  handleSearchLists = name => {
    this.props.dispatch(fetchShopListsByFilter(name))
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
        
        <ShopListIntro />
        
        <ShopListSearch handleSearchLists={this.handleSearchLists} />
        
        <ShopListList shopLists={this.props.shopLists} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ShopListPage.need = [() => { return fetchShopLists(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    shopLists: getShopLists(state),
  };
}

ShopListPage.propTypes = {
  shopLists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ShopListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ShopListPage);
