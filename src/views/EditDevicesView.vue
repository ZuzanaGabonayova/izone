<template>
  <!-- <div v-if="isLoggedin"> -->
    <v-snackbar
        v-model="snackbarEdit"
        >
        Device item edited successfully!
        <template v-slot:action="{ attrs }">
            <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbarEdit = false"
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
          <h1 class="shop">Admin Edit Items</h1>
          <div class="buttons-ae">
            <v-btn class="btn" color="success" @click="$router.push('adminlogin')">Admin Shop</v-btn>
            <v-btn class="btn" color="primary" @click="$router.push('addview')">Add Items</v-btn>
            <v-btn class="btn" color="error" @click.prevent="logOut()">LogOut</v-btn>
          </div>
          
          <div>
            <div class="row">
              <div class="col-sm-12 col-md-4" v-for="device in devices" :key="device">
                <div class="card">
                  <!-- <img :src="device.image" class="card-img-top" alt="..."> -->
                  <div class="card-body">
                    
                      <v-form>
                        <v-text-field
                          color="secondary"
                          label="Title"
                          variant="solo"
                          placeholder="Enter a title"
                          v-model="device.title">
                        </v-text-field>

                        <v-text-field
                          color="secondary"
                          label="Description"
                          variant="solo"
                          placeholder="Enter description"
                          v-model="device.description">
                        </v-text-field>

                        <v-text-field
                          color="secondary"
                          label="Price"
                          variant="solo"
                          placeholder="Enter price"
                          prefix="€"
                          v-model="device.price">
                        </v-text-field>

                        <v-checkbox
                          v-model="device.onstock"
                          :label="`On stock`">
                        </v-checkbox>
                      </v-form>
                      
                      <div class="edit-buttons">
                        <v-btn class="btn" color="error" @click="firebaseDeleteSingleItem(device.id)">DELETE</v-btn>
                        <v-btn class="btn" color="secondary" @click="firebaseEditSingleItem(device.id)">EDIT</v-btn>
                      </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </v-container>

    </div>
    
<!--   </div> -->
</template>

<script setup>
/* import { ref } from 'vue' */
import useDevices from '../modules/useDevices'
import { onMounted } from 'vue';
// import  useUsers  from '../modules/useUsers'

/* let checkbox = ref(false) */

/* const {
  isLoggedin,
  isLoggedinTest
} = useUsers()

onMounted(() => {
  isLoggedinTest()
}) */

const { 
  snackbarEdit,
  snackbarDelete,
  devices, 
  getDevicesData, 
  firebaseEditSingleItem, 
  firebaseDeleteSingleItem 
} = useDevices()

getDevicesData()

onMounted(() => {
  getDevicesData()
})

</script>
