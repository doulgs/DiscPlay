import React from "react";
import { View, Text, Image } from "react-native";
import { styeles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";

export function SignIn() {
  return (
    <View style={styeles.container}>
      
      <Image
        source={IllustrationImg}
        style={styeles.image}
        resizeMode="stretch"
      />
      <View style={styeles.content}>
        <Text style={styeles.title}>
          Conecte-se {"\n"}e organize suas {"\n"}
          jogatinas
        </Text>
        <Text style={styeles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
