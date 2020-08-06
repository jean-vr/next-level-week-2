import React from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import BackIcon from '../../assets/images/icons/back.png'
import LogoImg from '../../assets/images/logo.png'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={BackIcon} resizeMode="contain"/>
                </BorderlessButton>

                <Image source={LogoImg} resizeMode="contain"/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

export default PageHeader