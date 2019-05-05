<template>
  <div>
    
  </div>
</template>
<script>
import { getConfig } from '../../api/index.js';
export default {
  data() {
    return {
    }
      
  },
  components: {
  },
  onLoad() {
    getConfig().then(e => {
    })
  },
  onShow() {},
  mounted() {},
  methods: {

  },
  created() {
  }
};
</script>
<style lang="scss" scoped>


</style>
