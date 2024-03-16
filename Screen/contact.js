import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableHighlight } from "react-native";
import { WebView } from "react-native-webview";

axios.defaults.baseURL = "https://dev.trieazy.com/api/v2/";

export default function Contact({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const openAboutUsUrl = () => {
    // const url = "https://dev.trieazy.com/about-us";
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}> Contact As</Text>

      <TouchableOpacity onPress={openAboutUsUrl} style={styles.loginBtn}>
        <Text style={{ color: "white" }}>Open About Us</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableHighlight onPress={closeModal}>
              <Text style={{ fontSize: 18, color: "#fb5b5a" }}>Close</Text>
            </TouchableHighlight>

            <WebView
              source={{ uri: "https://dev.trieazy.com/about-us" }}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    height: "80%",
  },
});
