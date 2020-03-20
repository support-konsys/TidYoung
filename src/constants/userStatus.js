import { COLOR } from './theme'

export const VERY_DARK = {
  NORMAL: COLOR.VERY_DARK_RED,
  RISK: COLOR.VERY_DARK_RED,
  INFECTED: COLOR.VERY_DARK_GREEN,
  HEALED: COLOR.VERY_DARK_RED,
}

export const NORMAL = {
  NORMAL: COLOR.BLUE,
  RISK: COLOR.BUTTER,
  INFECTED: COLOR.COPPER,
  HEALED: COLOR.MINT,
}

export const DARK = {
  NORMAL: COLOR.DARK_BLUE,
  RISK: COLOR.DARK_BUTTER,
  INFECTED: COLOR.DARK_COPPER,
  HEALED: COLOR.DARK_MINT,
}

export const LIGHT = {
  NORMAL: COLOR.PALE_BLUE,
  RISK: COLOR.PALE_BUTTER,
  INFECTED: COLOR.PALE_COPPER,
  HEALED: COLOR.PALE_MINT,
}

export const TEXT = {
  NORMAL: 'สุขภาพปกติ',
  RISK: 'กำลังเฝ้าระวัง',
  INFECTED: 'มีเชื้อ COVID-19',
  HEALED: 'รักษาหายแล้ว',
}

export const STATUS = {
  NORMAL: 'NORMAL',
  RISK: 'RISK',
  INFECTED: 'INFECTED',
  HEALED: 'HEALED',
}

export default TEXT