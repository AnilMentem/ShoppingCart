import React, { Component } from 'react';
import { Text, Left, Right, ListItem } from 'native-base';

class OrderdedItem extends Component {

  render() {
    const { item, orderTotal } = this.props;
    return (
        <ListItem itemDivider>
           <Text>{item.title}</Text>
           <Text>{item.cost}</Text>
        </ListItem>
      
    );
  }
}

export default OrderdedItem;

