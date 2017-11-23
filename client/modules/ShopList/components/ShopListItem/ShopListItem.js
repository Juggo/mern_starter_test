import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

class ShopListItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <Link to={`/shoplist/${this.props.shopList.slug}-${this.props.shopList.cuid}`} >
            <div className="card-panel red lighten-2 hoverable">
              <span className="white-text"><b>{this.props.shopList.name}</b></span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

ShopListItem.propTypes = {
  shopList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired
};

export default ShopListItem;
