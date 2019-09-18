import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList} from 'react-native';
import { Container,Text, Header, Title, Left, Icon, Right, Button, Body, Content,H2, Card, CardItem} from "native-base";
import OrderdedItem from '../Components/OrderdItemComponent';

class Receipt extends Component {
    static navigationOptions = ({navigation}) => {
        return {
          headerTitle: 'Receipt',   
        }
    }
    constructor(props) {
        super(props);
    }
    
    render() {
        const { orderedItem,  orderTotal, navigation} = this.props ;
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
                    <Title>Receipt</Title>
                </Body>
                <Right/>
            </Header>
              <Content>
                  <Card>
                      <CardItem header bordered>
                       <H2>Order summary</H2>
                      </CardItem>
                      <CardItem bordered>
                          <Body>
                          <FlatList
                            data={ orderedItem } 
                            renderItem={({item,index}) => <OrderdedItem item={item} orderTotal={orderTotal}/> }
                             keyExtractor={(item,index) => index.toString()}
                             />
                          </Body>
                      </CardItem>
                      <CardItem footer bordered>
                          <Left><Text>Total</Text></Left>
                          <Right><Text style={{ fontWeight:"bold" }}>${orderTotal.toFixed(2)}</Text></Right>
                      </CardItem>
                  </Card>
              </Content>
            </Container>
          );
    }
}

const mapStateToProps = (state) => ({
    orderedItem: state.CartReducer.orderedItem,
    orderTotal: state.CartReducer.orderTotal,
});

export default connect(mapStateToProps)(Receipt);

