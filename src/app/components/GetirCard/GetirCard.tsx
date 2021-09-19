import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../globalStyles';

export interface Props {
  title?: string;
}

const GetirCard = ({title}: Props) => {
  return (
    <View style={styles.getirCardView}>
      <Text style={styles.getirText}>{title}</Text>
    </View>
  );
};

export default GetirCard;

const styles = StyleSheet.create({
  getirCardView: {
    height: hp(5),
    width: wp(22.4),
    marginLeft: wp(1.5),
    marginTop: hp(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: hp(1),
  },
  getirText: {
    color: COLOR.secondary,
    fontSize: hp(1.7),
    fontWeight: 'bold',
  },
});
