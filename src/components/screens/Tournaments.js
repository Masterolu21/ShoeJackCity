import React from 'react';
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { TournamentCard, Button, Spinner, CardSection, } from '../common';

class Tournaments extends React.Component {
 static navigationOptions= {
   tabBarLabel: 'Tournaments'
 }
   render() {
     return (

    <View style={styles.containerStyle}>
       <TournamentCard>
       <View style={styles.logoContainer}>
       <Image
         style={styles.logo}
         source={require('../../Images/ShoeJackCityLogo.png')}
       />
       </View>
       </TournamentCard>
       <View style={styles.formContainer}>
       <ScrollView>
       <TournamentCard style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.rectangle}>
        <Text style={styles.TimeStyle}>
         10AM
        </Text>
        </View>
        <ScrollView horizontal>
        <View style={{ flex: 1, flexDirection: 'column' }}>
        <TouchableOpacity>
        <Image
          style={styles.product}
          source={require('../../Images/aj_4_toro.png')}
        />
        <Text style={styles.productDescription}>
         Air Jordan 4{'\n'}
         Retro Toro Bravo
       </Text>
       </TouchableOpacity>
       </View>
       <View style={{ flex: 1, flexDirection: 'column' }}>
       <TouchableOpacity>
        <Image
          style={styles.product}
          source={require('../../Images/aj_4_toro.png')}
        />
        <Text style={styles.productDescription}>
         Air Jordan 4{'\n'}
         Retro Toro Bravo
       </Text>
       </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
        <TouchableOpacity>
      <Image
          style={styles.product}
          source={require('../../Images/aj_4_toro.png')}
      />
      <Text style={styles.productDescription}>
       Air Jordan 4{'\n'}
       Retro Toro Bravo
     </Text>
        </TouchableOpacity>
     </View>
      </ScrollView>
      </View>
      </TournamentCard>

      <TournamentCard>
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.rectangle} />
      <ScrollView horizontal>
      <View style={{ flex: 1, flexDirection: 'column' }}>
      <TouchableOpacity>
      <Image
        style={styles.product}
        source={require('../../Images/aj_4_toro.png')}
      />
      <Text style={styles.productDescription}>
       Air Jordan 4{'\n'}
       Retro Toro Bravo
     </Text>
      </TouchableOpacity>
     </View>
     <View style={{ flex: 1, flexDirection: 'column' }}>
      <TouchableOpacity>
      <Image
        style={styles.product}
        source={require('../../Images/aj_4_toro.png')}
      />
      <Text style={styles.productDescription}>
       Air Jordan 4{'\n'}
       Retro Toro Bravo
     </Text>
      </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
      <TouchableOpacity>
    <Image
        style={styles.product}
        source={require('../../Images/aj_4_toro.png')}
    />
    <Text style={styles.productDescription}>
     Air Jordan 4{'\n'}
     Retro Toro Bravo
   </Text>
      </TouchableOpacity>
   </View>
      </ScrollView>
    </View>
   </TournamentCard>

    <TournamentCard>
    <View style={{ flex: 1, flexDirection: 'row' }}>
    <View style={styles.rectangle} />
    <ScrollView horizontal>
    <View style={{ flex: 1, flexDirection: 'column' }}>
    <Image
      style={styles.product}
      source={require('../../Images/aj_4_toro.png')}
    />
    <Text style={styles.productDescription}>
     Air Jordan 4{'\n'}
     Retro Toro Bravo
   </Text>
   </View>
   <View style={{ flex: 1, flexDirection: 'column' }}>
    <Image
      style={styles.product}
      source={require('../../Images/aj_4_toro.png')}
    />
    <Text style={styles.productDescription}>
     Air Jordan 4{'\n'}
     Retro Toro Bravo
   </Text>
    </View>
    <View style={{ flex: 1, flexDirection: 'column' }}>
  <Image
      style={styles.product}
      source={require('../../Images/aj_4_toro.png')}
  />
  <Text style={styles.productDescription}>
   Air Jordan 4{'\n'}
   Retro Toro Bravo
 </Text>
 </View>
    </ScrollView>
  </View>
 </TournamentCard>

 <TournamentCard>
 <View style={{ flex: 1, flexDirection: 'row' }}>
 <View style={styles.rectangle} />
 <ScrollView horizontal>
 <View style={{ flex: 1, flexDirection: 'column' }}>
 <Image
   style={styles.product}
   source={require('../../Images/aj_4_toro.png')}
 />
 <Text style={styles.productDescription}>
  Air Jordan 4{'\n'}
  Retro Toro Bravo
</Text>
</View>
<View style={{ flex: 1, flexDirection: 'column' }}>
 <Image
   style={styles.product}
   source={require('../../Images/aj_4_toro.png')}
 />
 <Text style={styles.productDescription}>
  Air Jordan 4{'\n'}
  Retro Toro Bravo
</Text>
 </View>
 <View style={{ flex: 1, flexDirection: 'column' }}>
<Image
   style={styles.product}
   source={require('../../Images/aj_4_toro.png')}
/>
<Text style={styles.productDescription}>
Air Jordan 4{'\n'}
Retro Toro Bravo
</Text>
</View>
 </ScrollView>
</View>
</TournamentCard>

 <TournamentCard>
 <View style={{ flex: 1, flexDirection: 'row' }}>
 <View style={styles.rectangle} />
 <ScrollView horizontal>
 <View style={{ flex: 1, flexDirection: 'column' }}>
 <Image
   style={styles.product}
   source={require('../../Images/aj_4_toro.png')}
 />
 <Text style={styles.productDescription}>
  Air Jordan 4{'\n'}
  Retro Toro Bravo
</Text>
</View>
<View style={{ flex: 1, flexDirection: 'column' }}>
 <Image
   style={styles.product}
   source={require('../../Images/aj_4_toro.png')}
 />
 <Text style={styles.productDescription}>
  Air Jordan 4{'\n'}
  Retro Toro Bravo
</Text>
 </View>
 <View style={{ flex: 1, flexDirection: 'column' }}>
<Image
   style={styles.product}
   source={require('../../Images/aj_4_toro.png')}
/>
<Text style={styles.productDescription}>
Air Jordan 4{'\n'}
Retro Toro Bravo
</Text>
</View>
 </ScrollView>
</View>
</TournamentCard>
   </ScrollView>
   </View>
</View>

   );
     }
   }
   const styles = {
 backgroundImage: {
  flex: 1,
  resizeMode: 'cover', // or 'stretch'
  },
 containerStyle: {
   flex: 1,
   paddingBottom: 10,
   backgroundColor: '#F13C20'
 },
 formContainer: {
 },
 logoContainer: {
     alignItems: 'center',
     flexGrow: 1,
     justifyContent: 'flex-start',
     backgroundColor: '#F13C20'
 },
 logo: {
   width: 50,
   height: 50,
 },
 product: {
   width: 100,
   height: 100,
   marginRight: 30
 },
 rectangle: {
    width: 30,
    height: 100,
    backgroundColor: 'black'
},
  TimeStyle: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    justifyContent: 'center'
  },
 productDescription: {
   fontsize: 12,
   textAlign: 'center',
   fontStyle: 'italic',
   color: 'black',
   flex: 1,
   flexWrap: 'wrap',
   marginbottom: 10,
   marginRight: 30

 }
};
export default Tournaments;
