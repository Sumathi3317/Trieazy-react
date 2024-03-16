import "react-native-gesture-handler";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StatusBar, Linking } from "expo-status-bar";
import axios from "axios";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import ProfileScreen from "./Screen/ProfileScreen";
import Contact from "./Screen/contact";
import Categories from "./Screen/Categories";
import Privacypolicy from "./Screen/Privacypolicy";
import Terms from "./Screen/Terms";
import User from "./assets/icon.png";
import Footer from "./Screen/Footer";
import ForgetPassword from "./Screen/ForgetPassword";

axios.defaults.baseURL = "https://dev.trieazy.com/api/v2/";

export default function App() {
  const openAboutUsUrl = () => {
    const url = "https://www.trieazy.com/about-us";
    Linking.openURL(url);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#f4f4f4",
                  borderBottomWidth: 1,
                }}
              >
                <Image
                  source={User}
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 65,
                  }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    marginVertical: 6,
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  Trieazy
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#111",
                  }}
                >
                  Product Manager
                </Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerLabelStyle: {
            color: "#111",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            ),
          }}
          component={ProfileScreen}
        />
        <Drawer.Screen
          name="Timer"
          options={{
            drawerLabel: "Timer",
            title: "Timer",
            drawerIcon: () => (
              <MaterialIcons name="timer" size={20} color="#808080" />
            ),
          }}
          component={Contact}
        />
        <Drawer.Screen
          name="Categories"
          options={{
            drawerLabel: "Categories",
            title: "Categories",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            ),
          }}
          component={Categories}
        />
        <Drawer.Screen
          name="Customize"
          options={{
            drawerLabel: "Customize",
            title: "Customize",
            drawerIcon: () => (
              <MaterialIcons
                name="dashboard-customize"
                size={20}
                color="#808080"
              />
            ),
          }}
          component={Contact}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            ),
          }}
          component={Contact}
        />

        <Drawer.Screen
          name="Backups"
          options={{
            drawerLabel: "Backups",
            title: "Backups",
            drawerIcon: () => (
              <MaterialIcons name="backup" size={20} color="#808080" />
            ),
          }}
          component={Contact}
        />

        <Drawer.Screen
          name="Terms"
          options={{
            drawerLabel: "Terms",
            title: "Terms",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="certificate"
                size={20}
                color="#808080"
              />
            ),
          }}
          component={Terms}
        />
        <Drawer.Screen
          name="Footer"
          options={{
            drawerLabel: "Footer",
            title: "Footer",
            drawerIcon: () => (
              <FontAwesome name="star" size={20} color="#808080" />
            ),
          }}
          component={Footer}
        />
        <Drawer.Screen
          name="Privacypolicy"
          options={{
            drawerLabel: "Privacypolicy",
            title: "Privacypolicy",
            drawerIcon: () => (
              <MaterialIcons name="backup" size={20} color="#808080" />
            ),
          }}
          component={Privacypolicy}
        />

        <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: "Contact",
            title: "Contact",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="message-alert-outline"
                size={20}
                color="#808080"
              />
            ),
            onPress: openAboutUsUrl, // Handle navigation to external URL
          }}
          component={Contact}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
