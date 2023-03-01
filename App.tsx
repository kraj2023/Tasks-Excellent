import * as React from 'react';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import NavDemo from './component/NavDemo';


const App = () => {
  return (

    <NavDemo />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{title: 'Application Form'}}
    //     />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default App;