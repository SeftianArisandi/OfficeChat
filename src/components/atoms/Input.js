import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../utils'

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
    const [border, setBorder] = useState(colors.border);
    const onFocusForm = () => {
        setBorder(colors.primary);
    };
    const onBlurForm = () => {
        setBorder(colors.border);
    };
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                onFocus={onFocusForm} 
                onBlur={onBlurForm} 
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={styles.input(border, disable)}
                editable={!disable}   
                selectTextOnFocus={!disable}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: (border, disable) => ({
        borderWidth: 1,
        borderColor: border,
        borderRadius: 10,
        padding: 12,
        color: disable ? colors.text.subTitle : colors.text.primary
    }),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fonts.primary[400]
    }
})
