import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList} from 'react-native';
import { Container, Header,Footer,FooterTab, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

import Cart from '../Components/CartComponent.js';
import  CartItem  from '../Components/CartItemComponent';
 

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    onPressButton = () => {
      this.props.navigation.navigate('Checkout');
    }
    
    render() {
        const { cartItems, cartTotal, navigation } = this.props ;
        let content;
        let disableCheckoutBtn = false; 
        if(cartItems.length > 0) {           
          content = <FlatList style={{padding:10}}
          data={cartItems}
          renderItem={({item,index}) => <CartItem item={item} index={index}/> }
          keyExtractor={(item,index) => index.toString() }
      />
          disableCheckoutBtn = false; 
        }else {
          content = <Text style={{ textAlign:"center", marginTop:100 }}>Your cart is empty</Text>
          disableCheckoutBtn = true;
        }
        
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
                  <Title>Cart</Title>
              </Body>
              <Right>
                  <Cart navigation={navigation}/>
              </Right>
          </Header>
            <Content>{content}</Content>
            <Footer>
              <FooterTab style={{backgroundColor:'#f2f6f2', borderTopColor:'#333',borderTopWidth:0.5}}>
                <Body>
                  <Text style={{fontSize:18,fontWeight:"bold"}}>${cartTotal.toFixed(2)}</Text>
                  <Text>Total</Text>
                </Body>
              </FooterTab>
              <FooterTab style={{borderTopColor:'#333',borderTopWidth:0.5}}>
                <Button  rounded disabled={disableCheckoutBtn} full onPress={this.onPressButton}>
                  <Text>Proceed to checkout</Text>
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

export default connect(mapStateToProps)(Checkout);
