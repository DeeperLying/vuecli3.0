<template>
    <div class="ms" >
        <header class="header" >
            <h6>当前门店：火店宝</h6>
            <input placeholder="请输入计算" type="number">
            <div class="sum" >
                <b>
                    <span>0</span>.00
                </b>
            </div>
        </header>
        <div class="remarks" >
            <div class="content" >
                <span>备注:</span>
                <input type="text" max="20" >
                <span>0/20</span>
            </div>
        </div>
        <div class="main" >
            <div class="left" >
                <div class="number" v-for="(item, index) in numbers" :key="index" >
                    <button>{{ item }}</button>
                </div>
            </div>
            <div class="right" >
                <div>+</div>
                <div>-</div>
            </div>
        </div>
        <footer>

        </footer>
    </div>
</template>

<script>
  export default {
    name: "ms",
    components: {
    },
    data() {
      return {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, '00', '.', 0]
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<!-- 移动端一般都用rem -->
<style lang="scss" scoped>
    .ms {
        max-width: 740px;
        min-width: 375px;
        margin: 0 auto;
        .header {
            background-color: rgba(175, 56, 82, 1);
            color: white;
            padding: 15px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            h6 {
                font-size: 14px;
                text-align: left;
                margin: 0;
            }
            input {
                background-color: rgba(175, 56, 82, 1);
                font-size: 12px;
                width: 100%;
                padding: 10px 0;
                color: white;
                border: none;
                text-align: right;
            }
            input:focus {
                outline: -webkit-focus-ring-color auto 0px;
            }
            .sum {
                font-size: 20px;
                text-align: right;
                span {
                    font-size: 30px;
                }
            }
            input::-webkit-input-placeholder {
                /* WebKit browsers */
                color: white;
            }
            input:-moz-placeholder {
                /* Mozilla Firefox 4 to 18 */
                color: white;
            }
            input::-moz-placeholder {
                /* Mozilla Firefox 19+ */
                color: white;
            }
            input:-ms-input-placeholder {
                /* Internet Explorer 10+ */
                color: white;
            }
        }
        .remarks {
            padding: 15px;
            .content {
                padding: 5px 10px;
                border: 1px #ccc solid;
                border-radius: 50px;
                span {
                    display: inline-block;
                    width: 40px;
                }
                input {
                    font-size: 12px;
                    width: calc(100% - 80px);
                    padding: 10px 0;
                    color: white;
                    border: none;
                    text-align: right;
                }
                input:focus {
                    outline: -webkit-focus-ring-color auto 0px;
                }
            }
        }
        .main {
            display: flex;
            .left {
                flex: 1;
                padding: 15px;
                .number {
                    width: calc(100% / 3);
                    height: calc(60px);
                    line-height: 60px;
                    display: inline-block;
                    button {
                        width: 80%;
                        height: 80%;
                        font-size: 20px;
                        color: black;
                        margin: 0;
                        padding: 0;
                        border: none;
                    }
                }
            }
            .right {
                flex: 0.3;
                padding-right: 15px;
            }
        }
    }
</style>
