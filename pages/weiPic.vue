<template>
    <div class="container">
        <h1>weiboPic</h1>
        <div class="imgs">
            <div v-for="(item, index) in picArr" :key="index">
                <img :src="`${item}`" alt="" />
            </div>
            <!-- <img :src="src1" alt="" /> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            picArr: [],
            src1:
                "http://ww1.sinaimg.cn/large/005wJeKHly1goimpmvid6j31o0280kjm.jpg",
        };
    },
    asyncData({ $axios }) {
        return $axios.get("http://121.5.112.214:3001/api/find").then((res) => {
            if (res.status == 200) {
                // console.log(res);
                return { arr: res.data.data };
            } else {
                return { arr: "连接错误" };
            }
        });
    },
    created() {
        const arr2 = [];
        if (this.arr == "连接错误") {
            return;
        } else {
            this.arr.forEach((element) => {
                arr2.push(element.retweet_pictures.split(","));
            });
            arr2.forEach((item) => {
                if (item.length > 0) {
                    item.forEach((item2) => {
                        this.picArr.push(item2);
                    });
                }
            });
        }
    },
    methods: {
        getall() {
            this.$axios
                .get("http://121.5.112.214:3001/api/find")
                .then((res) => {});
        },
    },
};
</script>
<style>
img {
    width: 100%;
    height: 100%;
}
</style>
