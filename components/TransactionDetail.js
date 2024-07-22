import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{`$${transaction.amount.toFixed(2)}`}</Text>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.location}>{transaction.location}</Text>
      <Text style={styles.date}>{transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#42a5f5",
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: "#757575",
  },
});

export default TransactionDetail;
