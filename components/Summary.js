import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { transactions } from "../data/transactions";

const Summary = () => {
  const totalTransactions = transactions.length;
  const totalBalance = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  const highSpending = Math.max(...transactions.map((t) => t.amount));
  const lowSpending = Math.min(...transactions.map((t) => t.amount));
  const highSpendingTransaction = transactions.find(
    (t) => t.amount === highSpending
  );
  const lowSpendingTransaction = transactions.find(
    (t) => t.amount === lowSpending
  );

  return (
    <View style={styles.container}>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Total Transactions</Text>
        <Text style={styles.value}>{totalTransactions}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${totalBalance.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>High Spending</Text>
        <Text style={styles.value}>
          {highSpendingTransaction.name} - ${highSpending.toFixed(2)}
        </Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Low Spending</Text>
        <Text style={styles.value}>
          {lowSpendingTransaction.name} - ${lowSpending.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  summaryItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "400",
    color: "#42a5f5",
  },
});

export default Summary;
