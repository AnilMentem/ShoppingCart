import React, { Component } from 'react';
import { FlatList } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text } from "native-base";

import { connect } from 'react-redux';

import {fetchProducts} from '../Actions/ProductAction';
import {addToCart} from '../Actions/CartAction';

import Cart from '../Components/CartComponent';
import  Product  from '../Components/ProductComponent';

class Products extends Component {
    constructor(props) {
        super(props);
    }

    addItemsToCart = (product) => {
        this.props.addToCart(product);
    }
    componentDidMount = () => {
        this.props.fetchProducts();
    }
    render() {
        const { products, navigation } = this.props;
        let content;
        if (Products.length > 0 ) {
            content = <FlatList 
                     data={ products } 
            renderItem={({item}) => <Product addItemsToCart={this.addItemsToCart} item={item}/> }
            keyExtractor={(item,index) => index.toString()}
         />
        }else {
            content = <Text>product array is empty</Text>
        }
        return (
            <Container>
              <Header>
                <Left>
                    <Button transparent 
                        onPress={() => navigation.navigate("Home")}>
                    <Icon name="arrow-back" />
                 </Button>
                </Left>
                <Body>
                    <Title>Product</Title>
                </Body>
                <Right>
                    <Cart navigation={navigation}/>
                </Right>
            </Header>
            <Content>
              {content}
            </Content>
         </Container>
          );     
    }
}


const mapStateToProps = (state) => ({
    products : state.ProductReducer.products,
});

export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);




