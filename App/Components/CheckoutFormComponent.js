import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
  Form,
  Input,
  Item,
  Label,
  List,
  ListItem,
  Radio,
  Text } from "native-base";

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
              <Form >
                <Item floatingLabel  style={{ marginTop:10 }}>
                  <Label>Firstname</Label>
                  <Input/>
                </Item>
                <Item floatingLabel style={{ marginTop:10 }}>
                <Label>Lastname</Label>
                <Input/>
                </Item>
                <Item floatingLabel style={{ marginTop:10 }}>
                <Label>Email</Label>
                <Input/>
                </Item>
                <Item floatingLabel style={{ marginTop:10 }}>
                <Label>Phone</Label>
                <Input/>
                </Item>
                <Item floatingLabel style={{ marginTop:10 }}>
                  <Label>Address</Label>
                  <Input />
                </Item>
                <List>
                      <ListItem header>
                        <Text style={{fontSize:20, fontWeight:'bold' }}>Paymant Methods</Text>
                      </ListItem>
                      <ListItem>
                            <Radio selected={false} />
                            <Text>NetBanking</Text>
                        </ListItem>
                        <ListItem>
                            <Radio selected={true} />
                            <Text>Cash On Delivery</Text>
                        </ListItem>
                    </List>
              </Form>              
        );
        
    }
}


export default CheckoutForm;
