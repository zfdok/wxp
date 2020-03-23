<template>
  <div>
    <div class="wxptitle">
      <van-row>
        <van-col span="4">
          <van-image
            width="5rem"
            height="5rem"
            fit="contain"
            round
            src="https://s1.ax1x.com/2020/03/22/8ouf7n.jpg"
          />
        </van-col>
        <van-col span="20">
          <div class="result">
            <van-icon name="flower-o" badge="0" size="3rem" />
            <van-icon name="closed-eye" badge="0" size="3rem" />
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="wxpcard">
      <van-image width="90%" height="90%" src="https://s1.ax1x.com/2020/03/22/8ouf7n.jpg" />
    </div>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(1)">1</van-button>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(2)">2</van-button>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(3)">3</van-button>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(4)">4</van-button>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(5)">5</van-button>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(6)">6</van-button>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(8)">7</van-button>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(7)">7</van-button>
    <van-button color="#7232dd" round size="large" @click="xixiSelect(9)">7</van-button>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Dialog } from 'vant';
export default {
  name: "Home",
  data() {
    return {
      wxpList: []
    };
  },
  components: {},
  methods: {
    async getWXPList() {
      const { data: res } = await this.$http.get("/wxp");
      console.log(res.data);
      this.wxpList = res.data;
      console.log(this.wxpList);
    },
    xixiSelect(value) {
      console.log(value);
      Dialog.alert({
        title: "标题",
        message: "弹窗内容"
      }).then(() => {
        // on close
      });
    },
    getNowTest(){
      
    }
  },
  created() {
    this.getWXPList();
  }
};
</script>
<style scoped>
.wxptitle {
  background-color: #27ae60;
  text-align: center;
  margin: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
  padding: 0.5rem;
  box-shadow: 0 0 10px #777;
}
.wxpcard {
  text-align: center;
  background-color: #fff;
  margin: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 10px #999;
}
.van-button {
  margin: 5px;
  width: 30%;
}
.van-col {
  align-items: center;
}
.result {
  background-color: rgb(185, 82, 82);
  width: 70%;
  margin-left: 3rem;
  border-radius: 1rem;
}
.van-icon {
  margin: 1rem;
}
</style>