import React, { Component, PropTypes } from 'react';

// Import Style
//import styles from '../../components/PostListItem/PostListItem.css';

class ShopListNew extends Component {  
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card-panel">
            <ul>
              {
                console.log(this.props.shopListItems) &&
                this.props.shopListItems.map((listItem) => {
                  return <li key={listItem.item}>{listItem.amount}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopListNew;
