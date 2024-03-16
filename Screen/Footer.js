import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Privacypolicy from "./Privacypolicy";

const Footer = ({ navigation }) => {

  const Aboutus = () => {
    setIsClicked(true);
    navigation.navigate('Aboutus');
  };
  const Coupons = () => {
    setIsClicked(true);
    navigation.navigate('Coupons');
  };
  const Faq = () => {
    setIsClicked(true);
    navigation.navigate('Faq');
  };
  const Privacypolicy = () => {
    setIsClicked(true);
    navigation.navigate('Privacypolicy');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>
            About
        </Text>
      </View>
      <TouchableOpacity onPress={Aboutus}>
        <Text>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Coupons}>
        <Text>Coupons</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Faq}>
        <Text>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Privacypolicy}>
        <Text>Privacypolicy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    display: "block",
  },

 
});

export default Footer;
