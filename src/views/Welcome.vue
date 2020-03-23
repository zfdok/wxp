<template>
  <div class="welcome">
    <div class="title">
      <p>安妮识谱大作战</p>
    </div>
    <van-button type="primary" round size="large" @click="letsStart">开 始</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    letsStart() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.welcome {
  height: 100%;
  background: url(https://s1.ax1x.com/2020/03/23/87EgmR.jpg);
  background-size: cover;
  text-align: center;
  padding: 0.5rem;
}
.title {
  background-color: rgb(182, 75, 224);
  padding: 1rem;
  color: #fff;
  border-radius: 1.5rem;
  border: #fff 5px solid;
}
p {
  margin: 0;
  font-size: 2rem;
  text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;
}
.van-button {
  margin-top: 23rem;
  color: #fff;
  font-size: 2rem;
  width: 80%;
}
</style>