import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
  ImageBackground,
  SectionList,
} from 'react-native';
import {RootStackParamList} from '../App';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FontLoader from '../components/FontLoader';



//type PreSurveyNavigationProp = StackNavigationProp<RootStackParamList, 'UserSettings'>;
//type userSettingsProps = {
//    navigation: NavigationProp<RootStackParamList>;
//};

type userSettingsProps = StackNavigationProp<RootStackParamList, 'UserSettings'>;



const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontFamily: 'MontserratBold',
    fontSize: 26,
    marginLeft: 85,
    marginTop: -40
  },
  date:{
    fontFamily:'MontserratSemiBold',
    fontSize: 18,
    marginTop: 20,
  },
  container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  paragraph:{
    textAlign: 'center',
    color: 'white',
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    marginTop: 10,
  },
  card:{
    paddingHorizontal: 40,
    height:350,
    width:395,
    borderRadius: 50,
    marginTop: 20,
  },
  assignmentButton: {
    backgroundColor: '#0071BA',
    width: 395,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 20,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  assignmentButtonText: {
    color: 'white',
    fontFamily: 'MontserratBold',
    fontSize: 16,
  },
  arrow: {
    position: 'absolute',
    left: 0,
    top: -40,
  },
  textContainer: {
    marginRight: 'auto',
    marginLeft: '6%',
  },
  blob1: {
    position: 'absolute',
    width: 420,
    height: 180,
    top:200,
    left: -15,
    overflow: 'visible',
  },
  blob2: {
    position: 'absolute',
    width: 380,
    height: 180,
    top:220,
    left: -5,
    overflow: 'visible',
  },
  logo: {
    position: 'absolute',
    alignItems: 'center',
    left: 140,
    top: 700,
  },
  mainContainer: {
    width: '88%',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0071BA',
    overflow: 'hidden',
    top: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    },
    subBox: {
        width: '100%',
        height: 72,
        borderBottomWidth: 1,
        borderBottomColor: '#0071BA',
    },
    noBorderBottom: {
        borderBottomWidth: 0,
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0071BA',
        top: 13,
        left: -5,
        fontFamily: 'MontserratMedium',
    },
    subtitleText: {
        fontSize: 15,
        color: '#85CEFF',
        fontFamily: 'MontserratMedium',
        top: 20,
        left: -3,
    },
    icon: {
        marginLeft: 290,
        top: -15,
        color: '#0071BA'
    },
    centeredSubBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        left: 0,
        top: 0,
    },
});



export function UserSettings(props: userSettingsProps): React.JSX.Element {

    const navigation = useNavigation<userSettingsProps>();

    Moment.locale('en');
    const today = new Date();
    const subBoxes = [1, 2, 3, 4, 5, 6, 7];

    const subBoxContents = [
        { title: "Name", subtitle: "Jane Doe" },
        { title: "Email", subtitle: "jane.doe@gmail.com" },
        { title: "Password", subtitle: "***********" },
        { title: "School District", subtitle: "School District Name" },
        { title: "School", subtitle: "School Name" },
        { title: "Number of Children", subtitle: "3" },
        { title: "Notifications", subtitle: "" },
    ]; // Array of content for each sub-box

    // person-circle-outline
     
    return (
    <SafeAreaView style={styles.safeArea}>
        
        <Image style={styles.blob1} source={require('../assets/images/Blob3.png')} />
        <Image style={styles.blob2} source={require('../assets/images/Blob5.png')} />
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <Pressable
                    style={styles.arrow}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Ionicons name="arrow-back" size={30} color="black" />
            </Pressable>    
                <Text style={styles.title}>My Account</Text>
            </View>
            

            <View style={styles.mainContainer}>
            {subBoxContents.map((content, index) => (
                <View
                    key={index}
                    style={[
                        styles.subBox,
                        index === subBoxContents.length - 1 ? styles.centeredSubBox : null,
                        index === subBoxContents.length - 1 ? styles.noBorderBottom : null,
                    ]}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{content.title}</Text>
                        <Text style={styles.subtitleText}>{content.subtitle}</Text>
                    </View>
                    {index !== subBoxContents.length - 1 && (
                        <Ionicons name="chevron-forward-outline" size={20} style={styles.icon} />
                    )}
                </View>
            ))}
        </View>

            
        </View>

            
        <Image style={styles.logo} source={require('../assets/images/tiny_logo-removebg.png')} />
    </SafeAreaView>
    );
}

export default UserSettings;
