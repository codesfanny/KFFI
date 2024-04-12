import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ListItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate(item.title, item)}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#D1EDF3',
        padding: 25,
        marginHorizontal: 30,
        borderRadius: 10,
        marginBottom: 5,
    },
    listItemView: {
        alignItems: 'center',
    },
    listItemText: {
        color: '#0d0447',
        fontSize: 18,
        fontWeight: '700',
    }
  })

export default ListItem
