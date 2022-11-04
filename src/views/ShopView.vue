<template>
  <div>
    <v-container>
      <h1 class="shop">Shop</h1>

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
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </v-container>
    
  </div>
</template>

<script setup>
/* import { ref } from 'vue' */
import useDevices from '../modules/useDevices'
import { onMounted } from 'vue';

/* let checkbox = ref(false) */

const { 
  devices, 
  getDevicesData
} = useDevices()

getDevicesData()

onMounted(() => {
  getDevicesData()
})



</script>
