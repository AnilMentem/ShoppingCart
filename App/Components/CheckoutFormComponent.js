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
                  <Input onChangeText={(value) => this.onFirstNameChange(value)}value={this.state.firstName.value}/>
                </Item>
                <Item floatingLabel style={{ marginTop:10 }}>
                <Label>Lastname</Label>
                  <Input onChangeText={(value) => this.onLastNameChange(value)}value={this.state.lastName.value}/>
                </Item>
                <Item floatingLabel style={{ marginTop:10 }}>
                <Label>Email</Label>
                  <Input onChangeText={(value) => this.onEmailChange(value)}value={this.state.email.value} keyboardType='email-address'/>
                </Item>
                <Item floatingLabel style={{ marginTop:10 }}>
                <Label>Phone</Label>
                  <Input onChangeText={(value) => this.onPhoneChange(value)}value={this.state.phone.value} keyboardType='number-pad'/>
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
const mapStateToProps = (state) => ({
    formValid:state.FormValidationReducer.formValid,
})

export default connect(mapStateToProps)(CheckoutForm);
