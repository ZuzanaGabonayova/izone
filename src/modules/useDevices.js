import { ref } from 'vue'
import { db } from '../firebase.js'
import { collection, onSnapshot, /* getDocs, */ deleteDoc, doc, addDoc, updateDoc  } from 'firebase/firestore'

const useDevices = () => {

    const devices = ref([])
    const deviceDataRef = collection(db, "devices");
    const AddItemData = ref({})

    let snackbarAdd = ref(false)
    let snackbarEdit = ref(false)
    let snackbarDelete = ref(false)

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

    //add data to firebase
    const firebaseAddSingleItem = async() => {
        await addDoc(collection(db, "devices"), {

            title: AddItemData.value.title,
            description: AddItemData.value.description,
            price: AddItemData.value.price,
            onstock: AddItemData.value.onstock
        }).then(() => {
            AddItemData.value = ref([])
            snackbarAdd.value = true
        })
    }

    //edit data in firebase
    const firebaseEditSingleItem = async(id) => {
        await updateDoc(doc(deviceDataRef, id), {
            title: devices.value.find(device => device.id === id).title,
            description: devices.value.find(device => device.id === id).description,
            price: devices.value.find(device => device.id === id).price,
            onstock: devices.value.find(device => device.id === id).onstock
        }).then(() =>{
            snackbarEdit.value = true
        })
    }

    //delete data from firebase
    const firebaseDeleteSingleItem = async (id) => {
        await deleteDoc(doc(db, "devices", id)).then(() => {
            snackbarDelete.value = true
        });
    }

    return{
        snackbarAdd,
        snackbarEdit,
        snackbarDelete,
        devices,
        AddItemData,
        getDevicesData,
        firebaseAddSingleItem,
        firebaseEditSingleItem,
        firebaseDeleteSingleItem
    }
}
export default useDevices 