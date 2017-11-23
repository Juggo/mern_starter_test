import React, { Component, PropTypes } from 'react';

// Import Style
import styles from './ShopListIntro.css';

class ShopListIntro extends Component {
  render() {
    return (
      <div>
        <h1 className={`center-align red-text lighten-2 ${styles['h1-font-size']}`}>Create your own shopping list!</h1>
        <div className={`row red-text lighten-1 ${styles['space-top']}`}>
          <div className="col s4 center-align"><i className="large material-icons">dashboard</i></div>
          <div className="col s4 center-align"><i className="large material-icons">playlist_add</i></div>
          <div className="col s4 center-align"><i className="large material-icons">done_all</i></div>
        </div>
        <div className={`row black-text lighten-1 ${styles['space-bottom']}`}>
          <div className="col s4 center-align">Browse through existing lists</div>
          <div className="col s4 center-align">Create a list of your choice</div>
          <div className="col s4 center-align">Tick items during shopping</div>
        </div>
      </div>
    );
  }
}

export default ShopListIntro;
