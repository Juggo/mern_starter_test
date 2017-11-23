import React, { Component, PropTypes } from 'react';

class ShopListSearch extends Component {
  handleSearchChange = e => {
    e.preventDefault(); 
    this.props.handleSearchLists(e.target.value);
  };
  
  render() {
    return (
      <div>
        <div className="row">
          <h2 className='center-align red-text lighten-1'>Search shopping lists</h2>
        </div>
        <div className="row">
          <form>
            <div className="input-field col s6 offset-s3">
              <input id="search" type="text" className="validate" onChange={this.handleSearchChange}/>
              <label htmlFor="search">Enter a name</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ShopListSearch.propTypes = {
  handleSearchLists: PropTypes.func.isRequired,
};

export default ShopListSearch;
