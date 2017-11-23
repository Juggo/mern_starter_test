import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
//import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchShopList } from '../../ShopListActions';

// Import Selectors
import { getShopList } from '../../ShopListReducer';

export function ShopListDetailPage(props) {
  return (
    <div>
      <Helmet title={props.shopList.name} />
      <div>
        <h1>{props.shopList.name}</h1>
        <div className="row">
          <div className="col s6 offset-s3">
            <div className="card-panel">
              <ul>
                {
                  props.shopList.content.map(item => <li key={item} className="red-text lighten-1"><b>{item}</b></li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
ShopListDetailPage.need = [params => {
  return fetchShopList(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    shopList: getShopList(state, props.params.cuid),
  };
}

ShopListDetailPage.propTypes = {
  shopList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ShopListDetailPage);
