import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      {/* <Avatar urlImage="https://github.com/doulgs.png" /> */}
      <Avatar urlImage="https://avatars.githubusercontent.com/u/54917227?v=4.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Douglas</Text>
        </View>
        <Text style={styles.massage}>Hoje é dia de Vitoria</Text>
      </View>
    </View>
  );
}
