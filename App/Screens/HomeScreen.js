import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { StyleProvider, Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import Logo from '../Components/LogoComponent';
import Cart from '../Components/CartComponent';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    render() {
        const { navigation } = this.props;
        return (
            <StyleProvider style={getTheme(material)}>
            <Container>
              <Header>
                <Left>
                    <Button transparent 
                        onPress={() => navigation.navigate("Home")}>
                    <Icon name="menu" />
                 </Button>
                </Left>
                <Body>
                    <Title>Home</Title>
                </Body>
                <Right>
                    <Cart navigation={navigation}/>
                </Right>
            </Header>
            <Content padder>
                <Card>
                    <CardItem button bordered onPress={() => navigation.navigate("Product")}>
                     <Body style={{padding:20}}>
                        <Text style={{fontSize:20, fontWeight:"bold"}}>Books</Text>                    
                   </Body>
                 </CardItem>
                </Card>
                
                </Content>
            </Container>
            </StyleProvider>
          );
             
    }
}

export default Home;

