import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Modal,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLOR} from '../../globalStyles';
import GetirCard from '../GetirCard/GetirCard';
import FeatherICon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';

export interface Props {
  modalVisibility: boolean;
  modalVisibilitySetter: (state: boolean) => any;
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'getir',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'getiryemek',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'getirbüyük',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e35k73',
    title: 'getirçarşı',
  },
];

const GetirModal = ({modalVisibility, modalVisibilitySetter}: Props) => {
  return (
    <Modal
      visible={modalVisibility}
      transparent
      animationType="fade"
      onRequestClose={() => modalVisibilitySetter(false)}>
      <TouchableOpacity
        style={{
          height: hp(120),
          width: wp(100),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        onPress={() => modalVisibilitySetter(false)}
      />
      <View style={styles.getirCardContainer}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <GetirCard title={item.title} />}
          horizontal
        />
      </View>
      <TouchableOpacity
        style={styles.tabBarModalIconView}
        onPress={() => modalVisibilitySetter(false)}>
        <FeatherICon name="arrow-right-circle" size={30} color="#4B3397" />
      </TouchableOpacity>
    </Modal>
  );
};

export default GetirModal;

const styles = StyleSheet.create({
  getirModal: {
    height: hp(7),
    width: wp(95),
    marginLeft: wp(2.5),
    position: 'absolute',
    bottom: hp(13.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: hp(2),
  },
  tabBarModalIconView: {
    position: 'absolute',
    bottom: hp(4),
    height: hp(9),
    width: hp(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(100),
    backgroundColor: 'white',
    shadowColor: COLOR.lightGray,
    shadowOpacity: 0.3,
    marginLeft: wp(40),
  },
  getirCardContainer: {
    backgroundColor: COLOR.lightGray,
    position: 'absolute',
    bottom: hp(13.3),
    height: hp(6.5),
    width: wp(97),
    marginLeft: wp(1.5),
    borderRadius: hp(1),
  },
});
