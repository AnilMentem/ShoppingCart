import React, { Component } from 'react';
import {Image} from 'react-native';
import { Body,Text, Button,Card,CardItem, H3, ListItem } from "native-base";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Product extends Component {
  addToCart = () => {
    this.props.addItemsToCart(this.props.item);
  }
  render() {
    const { item } = this.props;
    return (
      <ListItem >
        <Card >
          <CardItem>
            <Image source={item.picture} style={{ marginBottom:20 , width:wp('83%')}}/>
          </CardItem>
           <CardItem footer bordered>
             <Body>
             <H3>{item.title}</H3>
             <Text style={{marginVertical:12}}>{item.cost}$</Text>
             <Text>{item.author}</Text>
             </Body>                      
          </CardItem>
          <CardItem footer bordered>
          <Button rounded onPress={this.addToCart}><Text>Add To Cart</Text></Button> 
          </CardItem>
        </Card>
        </ListItem>
    );  
    
  }
}

export default Product;

