<template>
  <div>
    <h1>Shop</h1>

    <div class="row">
      <div class="col-sm-12 col-md-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.price }}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import db from '../firebase.js'
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "devices", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
</script>
