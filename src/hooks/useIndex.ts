import {ref, onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
export default function () {
    onMounted(() => {

    })
    /**
     * 监听copy事件，阻止默认事件
     */
    const disableClick = () => {
        //监听copy事件，阻止默认事件
        // document.addEventListener('copy', (e) => {
        //     e.preventDefault();
        // });
        // // 禁止右键菜单弹出的函数
        // document.addEventListener('contextmenu', function (e) {
        //     e.preventDefault();
        // });
        // //禁止常用快捷键打开控制台的函数，这里以F12为例
        // document.addEventListener('keydown', function (e) {
        //     if (e.key === "F12") {
        //         e.preventDefault();
        //     }
        // });
    }

    /**
     * 监听console是否被打开
     */
    const watchConsole = () => {
        // let consoleOpen = false;
        // const originalConsole = console;
        // console = {
        //     ...originalConsole,
        //     log: function () {
        //         // console.log('进来了')
        //         consoleOpen = true;
        //         originalConsole.log.apply(this, arguments);
        //     }
        // };
        // setInterval(() => {
        //     if (consoleOpen) {
        //         debugger
        //         consoleOpen = false;
        //     }
        // }, 1000);
    }
    return {disableClick, watchConsole}
}