import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Card, Button, Spinner, CardSection, } from '../common';

class Tournaments extends React.Component {
 static navigationOptions= {
   tabBarLabel: 'Tournaments'
 }
   render() {
     return (

     <View style={styles.containerStyle}>
       <Card>
       <View style={styles.logoContainer}>
       <Image
         style={styles.logo}
         source={require('../../Images/ShoeJackCityLogo.png')}
       />
       </View>
       <View style={styles.formContainer} />
       </Card>
       <ScrollView horizontal>
        <Card>
        <View style={{ flex: 1, flexDirection: 'row'}}>
        <Image
          style={styles.product}
          source={require('../../Images/aj_4_toro.png')}
        />
        <Image
          style={styles.product}
          source={require('../../Images/aj_4_toro.png')}
        />
        <Image
          style={styles.product}
          source={require('../../Images/aj_4_toro.png')}
        />
      </View>
     </Card>
     </ScrollView>

     <ScrollView horizontal>
      <Card>
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        style={styles.product}
        source={require('../../Images/aj_4_toro.png')}
      />
      <Image
        style={styles.product}
        source={require('../../Images/aj_4_toro.png')}
      />
      <Image
        style={styles.product}
        source={require('../../Images/aj_4_toro.png')}
      />
    </View>
   </Card>
   </ScrollView>
     </View>

   );
     }
   }
   const styles = {
 containerStyle: {
   flex: 1,
   backgroundColor: '#F13C20',
   paddingBottom: 20
 },
 logoContainer: {
     alignItems: 'center',
     flexGrow: 1,
     justifyContent: 'flex-start',
     paddingBottom: 15
 },
 logo: {
   paddingTop: 15,
   width: 50,
   height: 50,
 },
 product: {
   width: 100,
   height: 100,
   paddingBottom: 15,
   marginRight: 50
 }
};
export default Tournaments;
