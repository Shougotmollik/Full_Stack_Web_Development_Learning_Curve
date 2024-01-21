import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>Hey!!✋</Text>
        </View>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>for</Text>
        </View>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>Left</Text>
        </View>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elavatedCard]}>
          <Text>Right</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'white',
  },
  container: {
    padding: 8,
  },
  card: {
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elavatedCard: {
    backgroundColor: 'white',
  },
});
