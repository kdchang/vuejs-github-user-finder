<template>
  <div class="page container">
    <input v-model="githubId" type="text">
    <button class="btn btn-primary" @click="submitForm">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Please input your github user id',
      githubId: '',
      userData: {},
    };
  },
  methods: {
    submitForm() {
      this.$router.push({ name: 'UserDetail', params: { githubId: this.githubId }});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
