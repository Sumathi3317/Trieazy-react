import React, { useState, useEffect } from "react";
import { ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import axios from "axios";
import { StyleSheet, Text, View, WebView } from "react-native";

const Aboutus = () => {
    const [apiData, setApiData] = useState(null);
   
    useEffect(() => {
      fetchData();
    }, []);
   
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dev.trieazy.com/api/v2/policies/aboutus'
        );
        const contentData = response.data?.data[0]?.content;
        setApiData(contentData);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

  return (
    <View style={styles.container}>

    <ScrollView contentContainerStyle={styles.scrollView}>
      {apiData && (
        <HTML
          source={{ html: apiData }}
          contentWidth={300} 
          tagsStyles={styles.tagsStyles} 
        />
      )}
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight:20,
      paddingLeft:5
   
    },
     
    scrollView: {
      flexGrow: 1,
      paddingHorizontal: 40,
      textAlign: 'center', 
    },
    tagsStyles: {
      h2: {
        fontSize: 30,
        fontFamily: 'Poppins',
        color: '#333',
       
      },
      p: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#666',
       
        textAlign:'justify'
       
      },
    },
  });
export default Aboutus;