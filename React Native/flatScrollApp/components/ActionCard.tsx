import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.cardHeadText}>What's new in TypeScript 📖</Text>

        <View style={styles.cardContainer}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201',
            }}
            style={styles.cardImage}
          />
          <View>
            <Text numberOfLines={3} style={styles.bodyDiscription}>
              TypeScript is a “flavor” or “variant” of JavaScript. The
              relationship between TypeScript (TS) and JavaScript (JS) is rather
              unique among modern programming languages, so learning more about
              this relationship will help you understand how TypeScript adds to
              JavaScript.
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html',
                )
              }>
              <Text>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 12,
  },
  card: {
    height: 320,
    width: 360,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 8,
  },
  elevatedCard: {
    backgroundColor: 'white',
    elevation: 3,
  },
  cardHeadText: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 12,
    marginBottom: 8,
    marginTop: 4,
    fontWeight: 'bold',
  },
  cardContainer: {
    borderRadius: 8,
    paddingHorizontal: 12,
    flex: 1,
    flexGrow: 1,
  },
  cardImage: {
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  bodyDiscription: {
    fontWeight: '400',
    marginBottom: 8,
  },
});
