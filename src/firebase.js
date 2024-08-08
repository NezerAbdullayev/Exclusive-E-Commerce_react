import { initializeApp } from 'firebase/app';
import { getAuth,  } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import {  getFirestore, } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import {
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: 'AIzaSyCsxFkhb9PFNeg2z0nuwLhRfWKvojdfCV4',
    authDomain: 'exclusive-41f8b.firebaseapp.com',
    projectId: 'exclusive-41f8b',
    storageBucket: 'exclusive-41f8b.appspot.com',
    messagingSenderId: '912062637221',
    appId: '1:912062637221:web:55ea238b23cd858c2a994c',
};

export const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);

const mountainsRef = ref(storage, "products/Cart.svg")

export async function ImgUrl(){
   try {
    const res=await getDownloadURL(mountainsRef)
    return res
   } catch (error) {
    console.error(error.message)
   }
}

