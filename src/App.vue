<template>
  <div id="app">
    <router-view/>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '@/components/Footer'

export default {
  components: {
    FooterComponent,
  }
}
</script>