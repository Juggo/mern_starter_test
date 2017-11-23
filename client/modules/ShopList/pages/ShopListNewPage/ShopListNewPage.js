import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import {Input } from 'react-materialize'

// Import Style
//import styles from '../../components/PostListItem/PostListItem.css';

// Import Components
import ShopListNew from '../../components/ShopListNew/ShopListNew';

// Import Actions
import { deleteData, addShopListItems } from '../../ShopListActions';

// Import Selectors
import { getShopListItems } from '../../ShopListReducer';

class ShopListNewPage extends Component {
  componentDidMount() {
    this.props.dispatch(deleteData([]));
  }
  
  addToList = () => {
    const amountRef = this.refs.amount;
    const unitRef = this.refs.unit;
    const itemRef = this.refs.item;
    if (amountRef.value && unitRef.state.value && itemRef.value) {
      this.props.dispatch(addShopListItems({amount: amountRef.value, unit: unitRef.state.value, item: itemRef.value}));
      
      console.log(this.props.shopListItems)
      
      amountRef.value = unitRef.value = itemRef.value = '';
    }
  }
  
  render() {
    return (
      <div>
        <Helmet title='New shopping list' />
        <div>
          <h1>New shopping list</h1>
          <div className="row">
            <form>
              <div className="input-field col s2 offset-s2">
                <input id="amount" type="text" className="validate" ref="amount"/>
                <label htmlFor="amount">Amount</label>
              </div>
              <Input s={2} type='select' label="Unit" ref="unit">
		<option defaultValue='-'>-</option>
		<option value='g'>Gram</option>
		<option value='kg'>Kilogram </option>
                <option value='ml'>Milliliter</option>
                <option value='l'>Liter</option>
              </Input>
              <div className="input-field col s4">
                <input id="item" type="text" className="validate" ref="item"/>
                <label htmlFor="item">Item</label>
              </div>
              <a className="waves-effect waves-light btn" href="#" onClick={this.addToList}>Add</a>
            </form>
          </div>
          
          <ShopListNew shopListItems={this.props.shopListItems}/>
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    shopListItems: getShopListItems(state),
  };
}

export default connect(mapStateToProps)(ShopListNewPage);
