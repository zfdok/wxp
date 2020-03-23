<template>
  <div>
    <van-image fit='contain' height="80%" src="https://s1.ax1x.com/2020/03/23/87XYxf.jpg"></van-image>
    <van-button type="info" size="large" round @click="donebtn">干 得 好</van-button>
  </div>
</template>

<script>
export default {
  name:"Alldone",
  methods:{
    donebtn(){
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
div{
  height: 100%;
  width: 100%;
  text-align: center;
}
.van-button{
  font-size: 1.5rem;
  width: 70%;
}
</style>