import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'

function AboutKffi() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      
      <Text style={styles.text}> 
          Welcome to Kings For Fitness Initiative (KFFI) Club, established in 2016 by a group of passionate individuals with a shared love for football and fitness. At KFFI, our primary objective is to create a safe and inclusive environment where individuals can come together to play football and engage in social activities, regardless of their race, religion, or ability.
      </Text>

      <Text style={styles.text}> 
          Beyond the field, our club is dedicated to promoting football and sports as powerful tools for enhancing health education, fostering learning opportunities, and encouraging local community involvement. We believe that through participation in our club, members have the opportunity to develop both sporting and personal skills that will benefit them throughout their lives.
      </Text>

      <Text style={styles.text}> 
          Through our programs, members not only gain physical fitness but also cultivate qualities such as self-respect, self-esteem, self-confidence, integrity, and respect for others. At KFFI, we strive to create a supportive community where everyone is empowered to achieve their full potential, both on and off the field. Join us as we pursue our shared passion for football and fitness, making a positive impact on individuals and communities alike.
      </Text>    

      <View style={styles.viewHeading}>
          <Text style={styles.textHeading}> 
              What Makes KFFI Club Stand Out?
          </Text> 
          <Text style={styles.subText}>
            Discover the Distinctive Qualities Setting KFFI Club Apart in Excellence and Innovation
          </Text>



          <View style={styles.imgContainer}>
            <Image
              style={styles.stretch}
              source={require('../images/inclusivity.png')}
            />
          </View>
          <Text style={styles.subSubText}> INCLUSIVITY </Text>
          <Text style={styles.text}>
              Fostering Unity and Diversity:
              Embracing All at KFFI Club, Where Inclusivity is Our Strength.
          </Text>


          <View style={styles.imgContainer}>
            <Image
              style={styles.stretch}
              source={require('../images/quality.png')}
            />
          </View>
          <Text style={styles.subSubText}> QUALITY </Text>
          <Text style={styles.text}>
              Elevating Standards:
              KFFI Club’s Uncompromising Commitment to Excellence and Quality.
          </Text>


          <View style={styles.imgContainer}>
            <Image
              style={styles.stretch}
              source={require('../images/support.png')}
            />
          </View>
          <Text style={styles.subSubText}> SUPPORT </Text>
          <Text style={styles.text}>
              Nurturing Community:
              KFFI Club’s Dedicated Support System for Every Member’s Journey.
          </Text>

      </View>
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    paddingTop: 20
  },
  text: {
    color: '#666666',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  viewHeading: {
    backgroundColor: '#ffffff',
    marginVertical: 20,
    padding: 20,
  },
  textHeading: {
    fontSize: 40,
    color: '#0D0447',
    fontWeight: '900',
    paddingHorizontal: 40,
    marginTop: 40,
    textAlign: 'center'
  },
  subText: {
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#0D0447',
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
    paddingBottom: 30,
    marginTop: 15,
    marginBottom: 30,
  },
  subSubText: {
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#0D0447',
  },
  imgContainer: {
    alignItems: "center",
  },
  stretch: {
    width: 60,
    height: 60,
    margin: 'auto',
    alignItems: 'center',
    tintColor: '#aa0000'
  },
})

export default AboutKffi;