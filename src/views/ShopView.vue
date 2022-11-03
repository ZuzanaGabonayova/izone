<template>
  <div>
    <h1 class="ma-10">Shop</h1>

    <v-form>
      <!-- <v-input placeholder="Title"></v-input> -->
      <v-text-field
      color="secondary"
      label="Title"
      variant="solo"
      placeholder="Enter a title"
      v-model="addDeviceInfo">
      </v-text-field>
    </v-form>

    <div class="row">
      <div class="col-sm-12 col-md-4" v-for="device in devices" :key="device">
        <div class="card">
          <!-- <img :src="device.image" class="card-img-top" alt="..."> -->
          <div class="card-body">
            <h5 class="card-title">{{ device.title }}</h5>
            <p class="card-text">{{ device.description }}</p>
            <p class="card-text">{{ device.price }}€</p>
            <p class="card-text">{{ device.onstock }}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
            <v-btn @click="firebaseDeleteSingleItem(device.id)">DELETE</v-btn>
            <v-btn @click="firebaseAddSingleItem()">ADD</v-btn>
            <v-btn @click="firebaseEditSingleItem(device.id)">EDIT</v-btn>
          </div>
        </div>
      </div>
    </div> 
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useDevices from '../modules/useDevices'
import { onMounted } from 'vue';

let addDeviceInfo = ref('')

const { devices, getDevicesData, firebaseAddSingleItem, firebaseEditSingleItem, firebaseDeleteSingleItem } = useDevices()
getDevicesData()

onMounted(() => {
  getDevicesData()
})

</script>
