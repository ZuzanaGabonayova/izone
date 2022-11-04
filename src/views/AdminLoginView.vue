<template>
    <!-- <div v-if="isLoggedin"> -->
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
                <h1 class="shop">Admin Shop</h1>
            
                <div class="buttons-ae">
                    <v-btn class="btn" color="primary" @click="$router.push('addview')">ADD ITEMS</v-btn>
                    <v-btn class="btn" color="secondary" @click="$router.push('editview')">EDIT ITEMS</v-btn>
                    <v-btn class="btn" color="error" @click.prevent="logOut()">LogOut</v-btn>
                </div>
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
                

            <!-- </div>

            <div v-else> -->
                <v-row>
                    <v-col md="6" xs="12" offset-md="3">
                        <h1 class="shop text-uppercase">Administrator LogIn</h1>
                        
                        <div class="info">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                type="email"
                                required
                            >
                            </v-text-field>

                            <v-text-field
                                v-model="password"
                                label="Password"
                                type="password"
                                required
                            >
                            </v-text-field>

                            <v-btn
                                color="primary"
                                @click.prevent="logIn()"
                            >
                            LogIn
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    <!-- </div> -->
</template>
  
<script setup>
import useDevices from '../modules/useDevices'
import { onMounted } from 'vue';
import useUsers from '@/modules/useUsers';
import { useImgStorage } from '@/modules/useImgStorage';
/* 
const {
  isLoggedin,
  isLoggedinTest
} = useUsers()

onMounted(() => {
  isLoggedinTest()
}) */

const { 
  devices, 
  snackbarDelete,
  getDevicesData, 
  firebaseDeleteSingleItem
} = useDevices()

const { 
  logIn,
  logOut,
  email,
  password
} = useUsers()

getDevicesData()

onMounted(() => {
  getDevicesData()
})

const {
    uploadFile,
    deleteFile
} = useImgStorage()



</script>
