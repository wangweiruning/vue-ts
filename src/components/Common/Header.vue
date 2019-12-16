<!--
 * @Description: ******************0^0**********************
 * @Author: wangwei
 * @Date: 2019-08-05 17:25:47
 * @LastEditTime: 2019-12-16 15:45:01
 * @LastEditors: wagnwei
 -->
<template>
  <div class="header">
    <div class="language" @click="changeLanguage">{{ $t('common.changeLanguage') }}</div>
  </div>
</template>

<script>
import { Vue, Component,Emit } from 'vue-property-decorator'

@Component({
  name:"Header"
})
export default class Header extends Vue {
  changeLanguage () {
      this.$emit('changeLanguage')
    }
}
</script>

<style lang="less" scoped>
  .header {
    position: relative;
    width: 100%;
    height: 40px;
    background: #6495ED;
    .language {
      position: absolute;
      top: 0;
      right: 30px;
      width: 120x;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      box-sizing: border-box;
      border: 1px solid #6495ED;
      &:hover {
       border: 1px solid #fff;
      }
    }
  }
</style>
