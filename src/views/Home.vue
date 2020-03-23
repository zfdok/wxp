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
            src="https://s2.ax1x.com/2019/04/15/AjAF9f.png"
          />
        </van-col>
        <van-col span="20">
          <div class="result">
            <van-icon name="flower-o" :badge="right" size="3rem" />
            <van-icon name="closed-eye" :badge="wrong" size="3rem" />
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="wxpcard">
      <van-image width="90%" height="90%" :src="nowTesting.imgsrc" />
    </div>
    <van-button color="#7232dd" round @click="xixiSelect(1)">1</van-button>
    <van-button color="#7232dd" round @click="xixiSelect(2)">2</van-button>
    <van-button color="#7232dd" round @click="xixiSelect(3)">3</van-button>
    <van-button color="#7232dd" round @click="xixiSelect(4)">4</van-button>
    <van-button color="#7232dd" round @click="xixiSelect(5)">5</van-button>
    <van-button color="#7232dd" round @click="xixiSelect(6)">6</van-button>
    <van-button color="#7232dd" round @click="xixiSelect(8)">👨</van-button>
    <van-button color="#7232dd" round @click="xixiSelect(7)">7</van-button>
    <van-button color="#7232dd" round @click="test">👩</van-button>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import wxpjson from "../../static/wxpdata.json";
import { Dialog } from "vant";
export default {
  name: "Home",
  data() {
    return {
      wxpList: [],
      nowTesting: {},
      right: 0,
      wrong: 0,
      needLearn: []
    };
  },
  components: {},
  methods: {
    xixiSelect(value) {
      console.log(value);
      Dialog.alert({
        title: "标题",
        message: "弹窗内容"
      }).then(() => {
        if (value === this.nowTesting.voice) {
          this.right++;
        } else {
          this.wrong++;
          this.needLearn.push(this.nowTesting.name);
          console.log(this.needLearn);
        }
        this.wxpList.splice(0, 1);
        console.log(this.wxpList.length);
        this.getNowTest();
      });
    },
    getNowTest() {
      if (this.wxpList.length) {
        this.wxpList = this.shuffle(this.wxpList);
        this.nowTesting = this.wxpList[0];
      } else {
        if (this.needLearn.length) {
          Dialog.alert({
            title: "标题",
            message: "弹窗内容"
          }).then(() => {
            console.log("这些还需要学:" + this.needLearn);
            this.$router.push("/alldone");
          });
        } else {
          this.$router.push("/alldone");
        }
      }
    },
    test() {
      console.log("haha");
      this.$router.push("/alldone");
    },
    shuffle(arr) {
      for (var i = arr.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = itemAtIndex;
      }
      return arr;
    }
  },
  created() {
    this.wxpList = wxpjson.data;
    this.getNowTest();
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
  font-size: 1.5rem;
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