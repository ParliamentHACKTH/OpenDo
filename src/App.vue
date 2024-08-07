<template>
  <div>
    <RouterView />
  </div>
</template>

<script>
import AOS from 'aos'

export default {
  mounted () {
    AOS.init();
  }
}
</script>
