import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/pages/Home';
import Login from './src/component/registration/Login';
import Signup from './src/component/registration/Signup';
import Forgetpassword from './src/component/registration/Forgetpassword';
import ForgetPasswordotp from './src/component/registration/forgetPasswordotp';
import Newpassword from './src/component/registration/Newpassword';
import Verify from './src/component/verify/Verify';
import GetDocuments from './src/component/verify/GetDocuments';
import Dashborad from './src/component/pages/Dashborad';
import Menu from './src/component/screen/Menu';
import Homes from './src/component/screen/Homes';
import Offer from './src/component/screen/Offer';
import Profile from './src/component/screen/Profile';
import More from './src/component/screen/More';
import Notification from './src/component/pages/Notification';
import Privacy from './src/component/pages/Privacy';
import Condition from './src/component/pages/Condition';
import Loader from './src/component/pages/Loader';
import Order from './src/component/screen/Order';
import PaymentDetails from './src/component/screen/PaymentDetails';
import AddPayment from './src/component/screen/AddPayment';
import OrderPage from './src/component/screen/OrderPage';
import Checkout from './src/component/screen/Checkout';
import AdminNavbar from './src/component/Admin/AdminNavbar';
import ActiveUser from './src/component/Admin/ActiveUser';
import CheckUser from './src/component/Admin/CheckUser';
import AddProduct from './src/component/Admin/AddProduct';
import CheckOrder from './src/component/Admin/CheckOrder';

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Verify">
        <Stack.Screen name='Loader' component={Loader} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Forgetpassword' component={Forgetpassword} />
        <Stack.Screen name='Forgetpasswordotp' component={ForgetPasswordotp} />
        <Stack.Screen name='Newpassword' component={Newpassword} />
        <Stack.Screen name='Verify' component={Verify} />
        <Stack.Screen name='GetDocuments' component={GetDocuments} />
        <Stack.Screen name='Dashborad' component={Dashborad} />
        <Stack.Screen setSelectedProduct={setSelectedProduct} name='Menu' component={Menu} />
        <Stack.Screen name='Offer' component={Offer} />
        <Stack.Screen name='Homes' component={Homes} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='More' component={More} />
        <Stack.Screen name='Notification' component={Notification} />
        <Stack.Screen name='Privacy' component={Privacy} />
        <Stack.Screen name='Condition' component={Condition} />
        <Stack.Screen selectedProduct={selectedProduct} name='Order' component={Order} />
        <Stack.Screen name='PaymentDetails' component={PaymentDetails} />
        <Stack.Screen name="AddPayment" component={AddPayment} />
        <Stack.Screen name="OrderPage" component={OrderPage} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="AdminNavbar" component={AdminNavbar} />
        <Stack.Screen name="ActiveUser" component={ActiveUser} />
        <Stack.Screen name="CheckUser" component={CheckUser} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="CheckOrder" component={CheckOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

