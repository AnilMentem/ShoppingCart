import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button,Text,Icon,Badge } from "native-base";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  
  goToCheckout = () => {
      this.props.navigation.navigate('Cart');
  }
  render() {
    const { cartItems } = this.props;
    return (
      <Button transparent onPress={this.goToCheckout}><Icon name='cart' /><Badge primary><Text>{cartItems.length}</Text></Badge></Button>
    );
  }
}


const mapStateToProps = (state) => ({
  cartItems: state.CartReducer.cart,
});


export default connect(mapStateToProps)(Cart);