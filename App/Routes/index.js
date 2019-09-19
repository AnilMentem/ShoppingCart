import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';
import CartScreen from '../Screens/CartScreen';
import CheckoutScreen from '../Screens/CheckoutScreen';
import ReceiptScreen from '../Screens/ReceiptScreen';

const Route = createStackNavigator(
    {
      Home: {
        screen: HomeScreen
      },
      Product: {
        screen: ProductScreen
      },
      Cart: {
        screen: CartScreen
      },
      Checkout: {
        screen: CheckoutScreen
      },
      Receipt: {
        screen: ReceiptScreen
      }
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        header:null,
      },
    }
  );
  export default ShoppingCartContainer = createAppContainer(Route);
