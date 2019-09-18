import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList} from 'react-native';
import {
  Button,
  Body,
  Content,
  Container,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title,
  Text } from "native-base";

import Cart from '../Components/CartComponent.js';
import  CheckoutForm  from '../Components/CheckoutFormComponent';
import { emptyCart } from '../Actions/CartAction';


class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    onPressButton = () => {
      if (this.validateForm) {
        this.props.navigation.navigate('Receipt');
        this.props.emptyCart();
      }
      
    }
    
    render() {
        const { cartItems, cartTotal, navigation } = this.props ;
        let disableCheckoutBtn = false;         
        return (
          <Container>
            <Header>
              <Left>
                  <Button transparent 
                      onPress={() => navigation.navigate("Home")}>
                  <Icon name="home" />
               </Button>
              </Left>
              <Body>
                  <Title>Checkout</Title>
              </Body>
              <Right>
                  <Cart navigation={navigation}/>
              </Right>
          </Header>
            <Content padder>
              <CheckoutForm/>        
            </Content>
            <Footer>
              <FooterTab>
                <Button disabled={disableCheckoutBtn} full onPress={this.onPressButton}> 
                  <Text>Prceed to pay {cartTotal}$</Text>              
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
        
    }
}

const mapStateToProps = (state) => ({
  cartItems: state.CartReducer.cart,
  cartTotal: state.CartReducer.total,
});

export default connect(mapStateToProps,{emptyCart})(Checkout);
