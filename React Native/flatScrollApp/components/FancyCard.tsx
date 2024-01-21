import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bandra_Worli_Sea-Link_%28cropped%29.jpg/288px-Bandra_Worli_Sea-Link_%28cropped%29.jpg',
          }}
          style={styles.imageCard}
        />
        <View style={styles.cardBody}>
          <Text style={styles.placeTitle}>Bandra Worli Sea 🏖️</Text>
          <Text style={styles.placeSubTitle}>Western Suburbs of Mumbai</Text>
          <Text style={styles.placeDiscription}>
            The sea-link reduces travel time between Bandra and Worli during
            peak hours from 20 - 30 minutes to 10 minutes.[10] As of 2018.
          </Text>
          <Text style={styles.placeFooter}>5.6 kilometres 🚗</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'white',
  },
  card: {
    height: 360,
    width: 360,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 8,
  },
  elevatedCard: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  imageCard: {
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 12,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  placeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  placeSubTitle: {
    fontSize: 18,
    marginBottom: 6,
  },
  placeDiscription: {
    fontSize: 16,
    fontWeight: '300',
  },
  placeFooter: {
    fontSize: 18,
    marginTop: 6,
  },
});
