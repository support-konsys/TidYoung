import React from 'react'
import moment from 'moment'
import { Text, View, StyleSheet, Image, Button, AsyncStorage } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import { COLOR } from '../../constants/theme'

const logout = () => {
  AsyncStorage.removeItem('@FacebookOAuthKey:accessToken')
  // setLoggedinStatus(false)
  // setUserData(null)
  // setImageLoadStatus(false)
}

export default ({ userData, navigation }) => (
  <View style={styles.container}>
    <View style={styles.spaceBetweenRow}>
      <>
        {/* <Icon name='fa-times' type='font-awesome' /> */}
        <Text onPress={() => navigation.navigate('QR')}>Back</Text>
      </>
    </View>
    <View style={{ width: '100%' }}>
      <View style={styles.cardWrapper}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.avatar} source={{ uri: userData.picture.data.url }} />
          <View style={{ marginLeft: 20, justifyContent: 'space-around' }}>
            <Text style={styles.title}>{userData.name}</Text>
            <Text style={styles.subtitle}>เริ่มใช้งานเมื่อ {moment().fromNow()}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ borderBottomColor: COLOR.BACKGROUND_GRAY, borderBottomWidth: 1, flex: 1, height: 15 }} />
        <Text style={{ ...styles.body, paddingHorizontal: 8 }}>ประวัติการแสกน</Text>
        <View style={{ borderBottomColor: COLOR.BACKGROUND_GRAY, borderBottomWidth: 1, flex: 1, height: 15 }} />
      </View>
      <View style={{ flexDirection: 'column', width: '100%', }}>
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.body}>คนที่พบทั้งหมด</Text>
          <Text style={styles.body}>75</Text>
        </View>
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.body}>สุขภาพปกติ</Text>
          <Text style={{ ...styles.body, color: COLOR.BLUE }}>75</Text>
        </View>
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.body}>เฝ้าระวัง</Text>
          <Text style={{ ...styles.body, color: COLOR.BUTTER }}>10</Text>
        </View>
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.body}>มีเชื้อ COVID-19</Text>
          <Text style={{ ...styles.body, color: COLOR.COPPER }}>5</Text>
        </View>
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.body}>รักษาหายแล้ว</Text>
          <Text style={{ ...styles.body, color: COLOR.MINT }}>19</Text>
        </View>
      </View>
      <Button onPress={() => logout()} title='ออกจากระบบ' />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 56,
    backgroundColor: '#fff',
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  title: {
    fontSize: 20,
    // fontWeight: '300',
    fontFamily: 'SukhumvitSet-SemiBold',
    color: COLOR.BLUE,
  },
  subtitle: {
    fontSize: 16,
    // fontWeight: '100',
    fontFamily: 'SukhumvitSet-SemiBold',
  },
  body: {
    fontSize: 17,
    // fontWeight: '400',
    fontFamily: 'SukhumvitSet-SemiBold',
    color: COLOR.TEXT_GRAY
  },
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8
  }
})
