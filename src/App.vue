<template>
  
  <div>
    <NavigationComponent />

    <Suspense>
      <router-view></router-view>
    </Suspense>

    <FooterComponent />
  </div>

</template>

<script>
import NavigationComponent from "./components/NavigationComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent
  },

  data: () => ({
    //
  }),
}
</script>

<style>
@import "./style/main.css";
</style>