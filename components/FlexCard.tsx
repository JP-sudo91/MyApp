import React from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';

const FlexCard = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      backgroundColor: !isDarkMode ? '#3c3c3c' : '#f4f4f4',
    },
    flexCardsContainer: {
      gap: 10,
      padding: 10,
    },

    flexCardContainer: {
      gap: 10,
    },

    flexHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: !isDarkMode ? '#f4f4f4' : '#3c3c3c',
    },
  });
  const flexCard = [
    {
      name: 'flexCard-1',
      id: 1,
      background: '#d13636',
    },
    {
      name: 'flexCard-2',
      id: 2,
      background: '#4548f4',
    },
    {
      name: 'flexCard-3',
      id: 3,
      background: '#f747d6',
    },
    {
      name: 'flexCard-4',
      id: 4,
      background: '#f46f16',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexCardsContainer}>
        <Text style={styles.flexHeading}>FlexCard With Horizontal Scroll </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          contentContainerStyle={styles.flexCardContainer}>
          {flexCard.map(item => (
            <FlexChild item={item} key={item.id} width={180} height={180} />
          ))}
        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          contentContainerStyle={styles.flexCardContainer}>
          {flexCard.map(item => (
            <FlexChild item={item} key={item.id} width={200} height={180} />
          ))}
        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          contentContainerStyle={styles.flexCardContainer}>
          {flexCard.map(item => (
            <FlexChild item={item} key={item.id} width={250} height={180} />
          ))}
        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          contentContainerStyle={styles.flexCardContainer}>
          {flexCard.map(item => (
            <FlexChild item={item} key={item.id} width={300} height={180} />
          ))}
        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          contentContainerStyle={styles.flexCardContainer}>
          {flexCard.map(item => (
            <FlexChild item={item} key={item.id} width={350} height={200} />
          ))}
        </ScrollView>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          contentContainerStyle={styles.flexCardContainer}>
          {flexCard.map(item => (
            <FlexChild item={item} key={item.id} width={400} height={200} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const FlexChild = ({item, width, height}: any): JSX.Element => {
  const {id, background} = item;

  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 10,
    },
    flexBox: {
      width: width || 180,
      height: height || 180,
      backgroundColor: background || 'red',
    },
  });

  return (
    <Text key={id} style={[styles.container, styles.flexBox]}>
      {item.name}
    </Text>
  );
};
export default FlexCard;
