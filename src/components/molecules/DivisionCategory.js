import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILCatPemasaran, ILCatPembelanjaan, ILCatPersonalia, ILCatProduksi } from '../../assets'
import { colors, fonts } from '../../utils'

const DivisionCategory = ({divisi, onPress}) => {
    const Icon = () => {
        if (divisi === "Produksi"){
            return <ILCatProduksi style={styles.illustration} />
        }
        if (divisi === "Pemasaran"){
            return <ILCatPemasaran style={styles.illustration} />
        }
        if (divisi === 'Personalia'){
            return <ILCatPersonalia style={styles.illustration} />
        }
        if (divisi === 'Pembelanjaan'){
            return <ILCatPembelanjaan style={styles.illustration} />
        }
        return <ILCatProduksi style={styles.illustration} />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <Text style={styles.label}>Divisi</Text>
            <Text style={styles.category}>{divisi}</Text>
        </TouchableOpacity>
    )
}

export default DivisionCategory

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 105,
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
