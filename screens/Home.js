import React from 'react'
import { StyleSheet, Text, View, Image, FlatList} from 'react-native'
import ListItem from '../components/ListItem';

export default function Home(props) {

    const DATA = [
        {
          id: '1',
          title: 'About KFFI',
        },
        {
          id: '2',
          title: 'Contact & Accounts',
        },
        {
          id: '3',
          title: 'Board of Trustees',
        },
        {
          id: '4',
          title: 'The Executives',
        },
        {
          id: '5',
          title: 'The Committees',
        },
        {
          id: '6',
          title: 'The Squad',
        },
      ];
    
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
        style={styles.stretch}
        source={require('../images/KFFI-temp-Logo.png')}
      />
      </View>
      <Text style={styles.text}> KINGS FOR FITNESS INITIATIVE CLUB</Text>

      <FlatList
        data={DATA}    
        renderItem={({item}) => <ListItem item={item} /> }
        // keyExtractor={item => item.id}
        // extraData={selectedId}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0447",
  },
  text: {
    color: '#fff',
    fontSize: 35,
    fontFamily: 'poppins',
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 60,
  },
  imgContainer: {
    alignItems: "center",
  },
  stretch: {
    width: 250,
    height: 250,
    margin: 'auto',
    alignItems: 'center',
  },
})