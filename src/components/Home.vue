<template>
  <div class="home">
    <v-header @changeLanguage="changeLanguage"></v-header>
    <div class="menu-wrapper">
        <ul class="menu">
            <li @click="active = 'Home'" :class="active === 'Home' ? 'active' : ''">{{$t("menu.home")}}</li>
            <li @click="active = 'UserCenter'" :class="active === 'UserCenter' ? 'active' : ''">{{$t("menu.userCenter")}}</li>
            <li @click="active = 'Message'" :class="active === 'Message' ? 'active' : ''">{{$t("menu.message")}}</li>
            <li @click="active = 'Setting'" :class="active === 'Setting' ? 'active' : ''">{{$t("menu.setting")}}</li>
            <li @click="active = 'Download'" :class="active === 'Download' ? 'active' : ''">{{$t("menu.download")}}</li>
        </ul>
    </div>
    <user-center v-if="active === 'UserCenter'"></user-center>
    <message v-if="active === 'Message'"></message>
    <setting v-if="active === 'Setting'"></setting>
    <download v-if="active === 'Download'"></download>
    <div class="home-content">
        {{ $t('menu.home') }}-----{{ js+id }}
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/Common/Header'
import Download from '@/components/Download/Download'
import Message from '@/components/Message/Message'
import Setting from '@/components/Setting/Setting'
import UserCenter from '@/components/UserCenter/UserCenter'
import { Vue, Component,Emit } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace,
} from 'vuex-class';
const someModule = namespace('HomeVUEX');

@Component({
    name:"Home",
    // 设置默认的props
    props: {
      id: {
        type: String,
        default: "444"
      }
    },
    components:{
      VHeader,
      Download,
      Message,
      Setting,
      UserCenter
    }
  })
  export default class Home extends Vue {
    @someModule.State(state => state.menulist) menulist;
    @someModule.Action('saveMenuListFN') saveMenuListFN;
    @someModule.Mutation('saveMenuList') saveMenuList;
    // 一般原来this的属性，一样可以在data方法中放回
    data() {
        return {
            message: '来自一位愿意透漏姓名的XXX网友说表示单身很快乐',
             active: 'Home'
        }
    }
    // 比如点击事件之类的，原来在methods，computed里面定义方法的，现在可以独立出来:
    // 喜欢
   changeLanguage () {
      const lang = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = lang
    }
    //相当于计算属性computed
    get js(){
      return this.$t('others.JSExample')+this.active
    }
  
    // 其他组件，route生命周期不变
    created(){
        console.log(this.menulist)
        this.saveMenuList()
    }
    mounted (){
       this.$on('emit-todo', function(n) {
                console.log(n)
       }) 
      this.emitTodo(234)
    }
  
    @Emit()
    emitTodo(tt){
        console.log('hello');
        
    }
  reset(){
    consoe.log("thisis 啊")
  }
    // methods 所有的方法都可以不写在里面
}
</script>

<style lang="less">
.home {
    width: 100%;
    .menu-wrapper {
        position: relative;
        width: 100%;
        height: 40px;
        background: #6495ED;
        .menu {
           display: flex;
            position: absolute;
            left: 50%;
            top:0px;
            transform: translate(-50%, 0);
            flex-direction: row;
            justify-content:space-between;
            align-items: center;
            li {
                height: 30px;
                width: 100px;
                font-size: 18px;
                line-height: 30px;
                list-style: none;
                margin-left: 10px;
                cursor: pointer;
                text-align: center;
                box-sizing: border-box;
                color: #fff;
                border: 1px solid #6495ED;
                &:hover {
                    border: 1px solid #fff;
                    color: greenyellow
                }
                &.active {
                    border: 1px solid red;
                    color: red
                }
            }
        }
    }
    .home-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        font-size: 24px;
    }
}
</style>
