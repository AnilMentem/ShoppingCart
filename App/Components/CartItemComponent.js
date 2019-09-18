import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Image,FlatList} from 'react-native';
import { Text,Button,Card, CardItem,Body, Left, Right, Icon } from 'native-base';

import { removeItem } from '../Actions/CartAction';

class CartItem extends Component {

  removeFromCart = (item,index) => {
    this.props.removeItem(item,index);
  }
  
  render() {
    const { item, index } = this.props;
    return (
      <Card>
        <CardItem header bordered>
          <Body>
          <Text style={{fontSize:18,fontWeight:"bold"}}>{item.title}</Text>
          </Body>
           <Right><Button transparent onPress={()=>{this.removeFromCart(item,index)}}><Icon name='close'/></Button></Right>
        </CardItem>
        <CardItem bordered>
          <Left>
            <Image source={item.picture} style={{ width:100, height:70 }}/>
          </Left>
          <Body>
            <Text>{item.introduction}$</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Left><Text>Price</Text></Left>
          <Right><Text style={{fontWeight:"bold"}}>{item.cost}$</Text></Right>
        </CardItem>
      </Card>
          
    );
  }
}

export default connect(null,{removeItem})(CartItem);

