<template>
  <div>
    <h1 class="ma-10">Edit</h1>

    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4" v-for="device in devices" :key="device">
          <div class="card">
            <!-- <img :src="device.image" class="card-img-top" alt="..."> -->
            <div class="card-body">
              
                <v-form
                >
                  <v-text-field
                    color="secondary"
                    label="Title"
                    variant="solo"
                    placeholder="Enter a title"
                    v-model="device.title"
                  >
                  </v-text-field>

                  <v-text-field
                    color="secondary"
                    label="Description"
                    variant="solo"
                    placeholder="Enter description"
                    v-model="device.description"
                  >
                  </v-text-field>

                  <v-text-field
                    color="secondary"
                    label="Price"
                    variant="solo"
                    placeholder="Enter price"
                    prefix="€"
                    v-model="device.price"
                  >
                  </v-text-field>

                  <v-checkbox
                    v-model="device.onstock"
                    :label="`On stock`"
                  >
                  </v-checkbox>
                </v-form>

              <v-btn @click="firebaseDeleteSingleItem(device.id)">DELETE</v-btn>
              <v-btn @click="firebaseEditSingleItem(device.id)">EDIT</v-btn>
            </div>
          </div>
        </div>
      </div> 
    </div>
    
  </div>
</template>

<script setup>
/* import { ref } from 'vue' */
import useDevices from '../modules/useDevices'
import { onMounted } from 'vue';

/* let checkbox = ref(false) */

const { 
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
