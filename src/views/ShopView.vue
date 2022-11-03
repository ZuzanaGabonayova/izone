<template>
  <div>
    <h1 class="ma-10">Shop</h1>

    <v-form
    class="ma-8 p-4">
      <v-text-field
        color="secondary"
        label="Title"
        variant="solo"
        placeholder="Enter a title"
        v-model="AddItemData.title"
      >
      </v-text-field>

      <v-text-field
        color="secondary"
        label="Description"
        variant="solo"
        placeholder="Enter description"
        v-model="AddItemData.description"
      >
      </v-text-field>

      <v-text-field
        color="secondary"
        label="Price"
        variant="solo"
        placeholder="Enter price"
        prefix="€"
        v-model="AddItemData.price"
      >
      </v-text-field>

      <v-checkbox
        v-model="AddItemData.onstock"
        :label="`On stock`"
      >
      </v-checkbox>
      <v-btn @click="firebaseAddSingleItem()">ADD</v-btn>
    </v-form>

    <div class="container">
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
  AddItemData,
  getDevicesData, 
  firebaseAddSingleItem, 
  firebaseEditSingleItem, 
  firebaseDeleteSingleItem 
} = useDevices()

getDevicesData()

onMounted(() => {
  getDevicesData()
})



</script>
