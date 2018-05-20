<template>
  <div class="page">
    <h1>{{ title }}</h1>
    <div class="container">
      <h4>{{$route.params.githubId}}</h4>
      <img :src="getGihubData.avatar_url" alt="">
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserDetail',
  data() {
    return {
      title: '',
    };
  },
  created() {
    // this.$store.dispatch('fetchGithubUserData', this.$route.params.githubId);
    this.fetchGithubUserData(this.$route.params.githubId);
  },
  computed: {
    ...mapGetters([
      'getGihubData',
    ])
  },
  methods: {
    ...mapActions([
      'fetchGithubUserData'
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
