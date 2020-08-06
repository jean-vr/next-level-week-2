import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

import LandingImg from '../../assets/images/landing.png'
import StudyIcon from '../../assets/images/icons/study.png'
import GiveClassesIcon from '../../assets/images/icons/give-classes.png'
import PurpleHeart from '../../assets/images/icons/heart.png'

function Landing() {
    const navigation = useNavigation()

    function handleNavigateToGiveClassesScreen() {
        navigation.navigate('GiveClasses')
    }

    function handleNavigationToStudyScreens() {
        navigation.navigate('Study')
    }

    return (
        <View style={styles.container}>
            <Image source={LandingImg} style={styles.banner}/>

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]}
                onPress={handleNavigationToStudyScreens}>
                    <Image source={StudyIcon}/>

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton style={[styles.button, styles.buttonSecondary]}
                onPress={handleNavigateToGiveClassesScreen}>
                    <Image source={GiveClassesIcon}/>

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 200 conexões já realizadas {' '}
                <Image source={PurpleHeart} />
            </Text>
        </View>
    )
}

export default Landing