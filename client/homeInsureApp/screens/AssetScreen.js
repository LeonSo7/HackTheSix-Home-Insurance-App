import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class AssetScreen extends Component {
  render() {
    return (
      <View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Add Assets</Text>
      </View>
      <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: 'red'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})