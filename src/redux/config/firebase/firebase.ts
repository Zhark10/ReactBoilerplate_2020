import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { config } from '../../utils/config/config'

firebase.initializeApp(config.FirebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
