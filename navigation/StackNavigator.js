import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionList from "../components/TransactionList";
import TransactionDetail from "../components/TransactionDetail";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions List" component={TransactionList} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
