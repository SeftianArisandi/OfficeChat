import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../utils'

const DataProfile = ({dataName, dataValue}) => {
    return (
        <View style={styles.page}>
            <Text style={styles.namaData}>{dataName}</Text>
            <Text style={styles.valueData}>{dataValue}</Text>
        </View>
    )
}

export default DataProfile

const styles = StyleSheet.create({
    page: {
        paddingBottom: 12
    },
    namaData: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary
    },
    valueData: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    }
})
