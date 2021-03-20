import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatProduksi } from '../../assets'
import { colors, fonts } from '../../utils'

const DivisionCategory = () => {
    return (
        <View style={styles.container}>
            <ILCatProduksi style={styles.illustration} />
            <Text style={styles.label}>Divisi</Text>
            <Text style={styles.category}>Produksi</Text>
        </View>
    )
}

export default DivisionCategory

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        height: 130
    },
    illustration: {
        marginBottom: 20
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
