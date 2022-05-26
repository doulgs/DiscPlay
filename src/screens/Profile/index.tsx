import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}> Douglas</Text>
        </View>
        <View style={styles.massage}>Hoje é dia de Votporia</View>
      </View>
    </View>
  );
}
