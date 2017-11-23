import React, { Component, PropTypes } from 'react';

// Import Components
import ShopListItem from './ShopListItem/ShopListItem';

class ShopListList extends Component {
  render() {
    return (
      <div className="listView">
        {
          this.props.shopLists.map(shopList => (
            <ShopListItem
              shopList={shopList}
              key={shopList.cuid}
            />
          ))
        }
      </div>
    );
  }
}

ShopListList.propTypes = {
  shopLists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired
};

export default ShopListList;
