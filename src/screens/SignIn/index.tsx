import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IllustrationImg from "../../assets/illustration.png";
import { styeles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  const navigation = useNavigation();
  function handleSingIn() {
    navigation.navigate("Home");
  }

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

        <ButtonIcon
          title="Entrar com o Discord"
          activeOpacity={0.7}
          onPress={handleSingIn}
        />
      </View>
    </View>
  );
}
