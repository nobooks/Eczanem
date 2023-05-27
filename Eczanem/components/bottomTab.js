import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QrScreen from '../src/screens/QrScreen'
import { TouchableOpacity, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useState, createContext, useContext, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import Ayarlar from '../src/screens/Ayarlar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Anasayfa from '../src/screens/Anasayfa'
import Hesap from '../src/screens/Hesap'
import Chat from '../src/screens/chatApp/Chat'
import Home from '../src/screens/chatApp/Home'
import EczacilarListesi from '../src/screens/EczacilarListesi'
import SiparisListesi from '../src/screens/pharmacist/SiparisListesi';
import Kullanicilar from '../src/screens/chatApp/Kullanicilar'

import { onAuthStateChanged } from 'firebase/auth';
const AuthenticatedUserContext = createContext({});
import deneme from '../src/screens/deneme'


import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

function BottomTab({ route }) {
    const CustomTabBarButton = ({ children, navigation }) => {

        return (
            <TouchableOpacity
                style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#2634C0',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 33,
                    marginTop: -30,
                    borderWidth: 2,
                    borderColor: 'white',

                }}

            >
                <Image
                    style={{ width: 70, height: 70, borderRadius: 40 }}
                    source={require('../assets/eczane4.png')} />
            </TouchableOpacity>
        )

    }



    return (
        <Tab.Navigator>
            <Tab.Screen name="Anasayfa" component={Anasayfa}

                options={{
                    headerShown: false,
                    tabBarIcon: () => <Entypo name="home" size={24} color="black" />

                }}
            />
            <Tab.Screen name="Ayarlar" component={Ayarlar}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <AntDesign name="qrcode" size={24} color="black" />
                }}

            />


            <Tab.Screen name="QR" component={QrScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <AntDesign name="qrcode" size={24} color="black" />
                }}

            />
            <Tab.Screen name="list" component={Ayarlar}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />
                }}
            />
            <Tab.Screen name="Kullanicilar" component={Kullanicilar}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Ionicons name="chatbubbles-sharp" size={24} color="black" />
                }}

            />
            <Tab.Screen name="Hesap" component={Hesap}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} color="black" />
                }}
            />

        </Tab.Navigator>
    );
}

export default BottomTab;