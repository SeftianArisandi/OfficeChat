import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../utils';
import BtnIconSend from './BtnIconSend';
import ButtonIconOnly from './ButtonIconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} onPress={onPress} />
  }
  if (type === 'icon-only') {
    return <ButtonIconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background
  },
  disableText: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.button.disable.text
  },
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  })
});
