import React, {useEffect, useState} from 'react';
import getAllCountry, {getCountryName} from '../utils/utils';
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const GetCountry = () => {
  const [countryData, setCountryData] = useState<any>([]);
  const [countryName, setCountryName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const countryData = await getAllCountry();
      setCountryData(countryData);
      setIsLoading(false);
    }
    getData();
  }, [countryName]);

  const searchCountry = async () => {
    setIsLoading(true);
    const fetchedCountryInfo = await getCountryName(countryName);
    setCountryData(fetchedCountryInfo);
    setIsLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headingContainer}>World Country Information</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Country name"
          value={countryName}
          onChangeText={(text: string) => setCountryName(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Search" onPress={searchCountry} color="#504ec3" />
        </View>
      </View>
      <View style={styles.countryInfoContainer}>
        {isLoading ? (
          <>
            <CountryLoader />
            <CountryLoader />
          </>
        ) : (
          <>
            {countryData.map((country: any, index: number) => {
              return (
                <View key={index} style={styles.countryContainer}>
                  <Image
                    source={{uri: country.flag}}
                    style={styles.countryFlag}
                  />
                  <View style={styles.countryDetails}>
                    <Text style={styles.countryName}>{country.name}</Text>
                    <Text style={styles.countryCapital}>
                      <Text style={styles.heading}>Capital: </Text>
                      {country.capital}
                    </Text>
                    <Text style={styles.countryRegion}>
                      <Text style={styles.heading}>Region: </Text>
                      {country.region}
                    </Text>
                    <Text style={styles.countryPopulation}>
                      <Text style={styles.heading}>Population: </Text>
                      {country.population}
                    </Text>
                    <Text style={styles.countryArea}>
                      <Text style={styles.heading}>Area: </Text>
                      {country.area} km{'\u00B2'}
                    </Text>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(country.map)}>
                      <Text style={styles.mapLink}>Location</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </>
        )}
      </View>
    </ScrollView>
  );
};

const CountryLoader = () => {
  return (
    <View style={[styles.countryContainer]}>
      <ShimmerPlaceholder
        style={[styles.countryFlag, styles.countryFlagLoader]}
      />
      <View style={[styles.countryDetails]}>
        <ShimmerPlaceholder
          style={[styles.countryInfoLoader]}></ShimmerPlaceholder>
        <ShimmerPlaceholder
          style={[
            styles.countryInfoLoader,
            styles.countryCaptialLoader,
          ]}></ShimmerPlaceholder>
        <ShimmerPlaceholder
          style={[
            styles.countryInfoLoader,
            styles.countryRegionLoader,
          ]}></ShimmerPlaceholder>
        <ShimmerPlaceholder
          style={[
            styles.countryInfoLoader,
            styles.countryPopulationLoader,
          ]}></ShimmerPlaceholder>
        <ShimmerPlaceholder
          style={[
            styles.countryInfoLoader,
            styles.countryAreaLoader,
          ]}></ShimmerPlaceholder>
        <ShimmerPlaceholder
          style={[
            styles.countryInfoLoader,
            styles.countryMapLoader,
          ]}></ShimmerPlaceholder>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 20,
    gap: 15,
  },
  headingContainer: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    //   padding: 10,
  },
  countryInfoContainer: {
    display: 'flex',
    gap: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '70%',
  },
  buttonContainer: {
    // backgroundColor: '#504ec3', // You can only style the container, not the button directly
    borderRadius: 10,
  },
  countryContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: 10,
    gap: 10,
    width: 350,
  },
  countryDetails: {
    flex: 1,
    gap: 6,
    padding: 10,
  },
  countryFlag: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  countryFlagLoader: {
    backgroundColor: '#e0e0e0', // Gray color for the flag loader
    borderRadius: 4,
    marginRight: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countryCapital: {
    fontSize: 16,
  },
  countryRegion: {
    fontSize: 16,
  },
  countryPopulation: {
    fontSize: 16,
  },
  countryArea: {
    fontSize: 16,
  },
  countryTimezones: {
    fontSize: 16,
  },
  mapLink: {
    fontSize: 16,
    marginBottom: 10,
    color: 'blue',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    textDecorationStyle: 'solid',
    cursor: 'pointer',
  },
  countryInfoLoader: {
    height: 30, // Height of each loading line
    backgroundColor: '#e0e0e0', // Gray color for text loaders
    marginBottom: 10, // Space between lines
    borderRadius: 4, // Rounded corners for a smoother look
    width: '80%',
  },
  countryCaptialLoader: {
    width: '60%',
  },
  countryRegionLoader: {
    width: '50%',
  },
  countryPopulationLoader: {
    width: '70%',
  },
  countryAreaLoader: {
    width: '40%',
  },
  countryMapLoader: {
    width: '30%',
  },
});

export default GetCountry;
