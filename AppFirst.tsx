import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Platform,
  useWindowDimensions,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

const AppFirst = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Hello World</Text>

        <View style={styles.container2}>
          <Text style={styles.subHeading}>
            This is a simple app to demonstrate the use of React Native
          </Text>
        </View>
        <Button title="Click Me" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#000',
    height:"100%",
    padding: 10,
  },
  container2: {
    // flex: 2,
  },
  heading: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e21f5',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    shadowColor: '#000',
    width: 100,
  },
});
export default AppFirst;
