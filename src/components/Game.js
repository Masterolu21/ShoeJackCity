import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Switch } from 'react-native-switch';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const { height, width } = Dimensions.get('window');


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading
	});
}



class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>Window Name</Text>
        </View>

        <View style={styles.content}>

          <View style={{ flex: 1, flexDirection: 'row', padding: 5 }}>
            <View style={styles.column1}>
              <Text style={styles.subtitle}>Round 1</Text>
              <TextInput
                style={styles.inputField}
                value={""}
                placeholder={"Search"}/>
            </View>
            <View style={styles.column2}>
              <Text style={styles.subtitle}>60</Text>
              <Image style={styles.clockImage} source={require('../../assets/icons/time.png')}></Image>
              <View style={styles.subcolumn}>
                <Text style={styles.subtitle1}>MP</Text>
                <Text style={styles.subtitle1}>BP</Text>
                <Text style={styles.subtitle1}>DS</Text>
                <Text style={styles.subtitle1}>SP</Text>
              </View>
            </View>
            <View style={styles.column3}>
              <Text style={styles.subtitle}>693 Players</Text>
              <Text style={styles.subtitle}>Remaining</Text>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <ScrollView>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Username</Text>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={{ flex: 1, padding: 5, flexDirection: 'row' }}>
            <View style={{ flex: 2, alignItems: 'center' }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image style={styles.userImage} source={require('../../assets/avatars/avatar6.jpg')}></Image>
                <View style={styles.progressBar}>
                  <Text style={styles.name}>Username</Text>
                  <Progress.Bar style={{ marginBottom: 2 }} progress={0.8} width={ null } color={ '#429321' }></Progress.Bar>
                  <Progress.Bar progress={0.3} width={ null }></Progress.Bar>
                </View>
              </View>
              {/* <View style={{flex: 1, flexDirection: 'row'}}>
                <Switch value={ true } />
              </View> */}
            </View>
            <View style={{ flex: 1 }}>
            </View>
          </View>
          <View style={{ flex: 3, padding: 5 }}>
          </View>
        </View>

      </View>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  item: {
    flex: 1,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    color: '#429321',
    padding: 5,
  },
  userImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    padding: 5
  },
  progressBar: {
    flex: 1,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#d2d2d2',
    padding: 5,
    paddingLeft: 15,
    width: '100%',
    fontSize: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 10,
  },
  column1: {
    flex: 1,
    padding: 5,
    alignItems: 'flex-start',
  },
  column2: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  column3: {
    flex: 1,
    padding: 5,
    alignItems: 'flex-end',
  },
  subcolumn: {
    flex: 1,
    flexDirection: 'row',
  },
  subtitle1: {
    padding: 5,
    fontSize: 18,
    color: '#429321',
  },
  clockImage: {
    width: 20,
    height: 20
  },
  subtitle: {
    fontSize: 20,
    color: '#429321',
  },
  footer: {
    flex: 6,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    color: '#429321',
    padding: 5
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(Game);
