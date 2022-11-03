import { ref } from 'vue'
import { db } from '../firebase.js'
import { collection, onSnapshot, /* getDocs, */ deleteDoc, doc, addDoc, updateDoc  } from 'firebase/firestore'

const useDevices = () => {

    const devices = ref([])
    const deviceDataRef = collection(db, "devices");

    //grab data from firebase
    const getDevicesData = () => {
        onSnapshot(deviceDataRef, (snapshot) => {
            devices.value = snapshot.docs.map(doc =>{
            return {
                ...doc.data(),
                id: doc.id
            }
            })
        })
    }

    /* let formInput = ref({
        title: device.title.value,
        description: device.description.value,
        price: device.price.value,
        onstock: device.onstock.value
    }) */
    //add static data to firebase
    const firebaseAddSingleItem = async() => {
        await addDoc(collection(db, "devices"), {
            title: "test title",
            description: "test description",
            price: 100,
            onstock: false
        })
    }

    const firebaseEditSingleItem = async(id) => {
        await updateDoc(doc(deviceDataRef, id), {
            title: "updated title",
            description: "updated description",
            price: 100,
            onstock: false
        })
    }

    //delete data from firebase
    const firebaseDeleteSingleItem = async (id) => {
        await deleteDoc(doc(db, "devices", id));
    }

    return{
        devices,
        getDevicesData,
        firebaseAddSingleItem,
        firebaseEditSingleItem,
        firebaseDeleteSingleItem
    }
}
export default useDevices 