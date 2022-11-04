<template>
    <!-- <div v-if="isLoggedin"> -->
                <v-snackbar
                    v-model="snackbarAdd"
                    >
                    Device item added successfully!
                    <template v-slot:action="{ attrs }">
                        <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click="snackbarAdd = false"
                        >
                        Close
                        </v-btn>
                    </template>
                </v-snackbar>

                <v-snackbar
                    v-model="snackbarDelete"
                    >
                    Device item deleted successfully!
                    <template v-slot:action="{ attrs }">
                        <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click="snackbarDelete = false"
                        >
                        Close
                        </v-btn>
                    </template>
                </v-snackbar>
        
            <div>
                <v-container>
                    <h1 class="shop">Admin Add Items</h1>
                    <div class="buttons-ae">
                        <v-btn class="btn" color="success" @click="$router.push('adminlogin')">Admin Shop</v-btn>
                        <v-btn class="btn" color="secondary" @click="$router.push('editview')">Edit Items</v-btn>
                        <v-btn class="btn" color="error" @click.prevent="logOut()">LogOut</v-btn>
                    </div>
                    
                    <v-form>
                        <v-file-input 
                            label="File input" 
                            @change="UploadImage"
                            accept="image/*">
                        </v-file-input>
                    
                        <v-text-field
                            color="secondary"
                            label="Title"
                            variant="solo"
                            placeholder="Enter a title"
                            v-model="AddItemData.title">
                        </v-text-field>
                    
                        <v-text-field
                            color="secondary"
                            label="Description"
                            variant="solo"
                            placeholder="Enter description"
                            v-model="AddItemData.description">
                        </v-text-field>
                    
                        <v-text-field
                            color="secondary"
                            label="Price"
                            variant="solo"
                            placeholder="Enter price"
                            prefix="€"
                            v-model="AddItemData.price">
                        </v-text-field>
                    
                        <v-checkbox
                            v-model="AddItemData.onstock"
                            :label="`On stock`">
                        </v-checkbox>
                        <div class="buttons-ae">
                            <v-btn class="btn" color="primary" @click="firebaseAddSingleItem()">ADD ITEM</v-btn>
                        </div>
                    </v-form>
                
                    <div>
                        <div class="row">
                            <div class="col-sm-12 col-md-4" v-for="device in devices" :key="device">
                                <div class="card">
                                    <!-- <img :src="device.image" class="card-img-top" alt="..."> -->
                                    <div class="card-body">
                                        <h5 class="card-title">{{ device.title }}</h5>
                                        <p class="card-text">{{ device.description }}</p>
                                        <p class="card-text">{{ device.price }}€</p>
                                        <p class="card-text">{{ device.onstock }}</p>
                                        <v-btn @click="firebaseDeleteSingleItem(device.id)" color="error">DELETE</v-btn>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>


                </v-container>
    </div>
    <!-- </div> -->
</template>
  
<script setup>
import useDevices from '../modules/useDevices'
import { onMounted } from 'vue';
/* import  useUsers  from '../modules/useUsers'

const {
  isLoggedin,
  isLoggedinTest
} = useUsers()

onMounted(() => {
  isLoggedinTest()
}) */

const { 
  snackbarAdd,
  snackbarDelete,
  devices, 
  AddItemData,
  getDevicesData, 
  firebaseAddSingleItem,  
  firebaseDeleteSingleItem 
} = useDevices()

getDevicesData()

onMounted(() => {
  getDevicesData()
})

/* export default {
    data() {
        return{

        }
    },
    methods:{
        UploadImage(e){
            let file = e;
            console.log(e.targer.files[0]);
        }
    }
} */


</script>
