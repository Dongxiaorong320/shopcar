Vue.component('mfq-header',{
    template:`
        <div class="top">
            <span>
                <i class="icon iconfont icon-back" @click='back'></i>
            </span>
            <h2>
                {{title}}
            </h2>
        </div>
    `,
    props:{
        title:{
            type:String,
            required:true
        }
    },
    methods:{
        back(){
            window.location.go(-1)
        }
    }
})