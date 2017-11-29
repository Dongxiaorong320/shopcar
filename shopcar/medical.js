Vue.component('mfq-medical',{
    template:`
        <div class='medical' v-swipe:right='cb_right' v-swipe:left='cb_left'>
            <div class='cont' @click='medical_checked'>
               <span class='select-all' :class="{'select-all-active':items.checked}"></span>{{items.medical}}
            </div>
            <div class='contBot'>
                 <span>￥{{items.price}}</span>
                 <div>
                    <button @click='add'>+</button>
                    <button>{{items.count}}</button>
                    <button @click='decream'>-</button>
                 </div>
            </div>
            <div class='del' :class="{'del_active':isDel}">删<br>除</div>
        </div>
    `,
    props:{
        items:{
            required:true,
            type:Object
        },
        medical_index:{

        },
        hospital_index:{

        }
    },
    data(){
        return {
            isDel:false,
            selected:false
        }
    },
    watch:{
        selected(n){
            console.log(n)
        }
    },
    methods:{
        medical_checked(){
            this.$store.commit('change_medical_checked',{
                hospital_index:this.hospital_index,
                medical_index:this.medical_index,
                checked:!this.items.checked
            })
            this.$store.commit('updata_total_price')
        },
        add(){
            this.$store.commit('change_medical_count',{
                hospital_index:this.hospital_index,
                medical_index:this.medical_index,
                count: ++this.items.count
            })

            this.$store.commit('updata_total_price')
        },
        decream(){
            this.$store.commit('change_medical_count',{
                hospital_index:this.hospital_index,
                medical_index:this.medical_index,
                count: --this.items.count
            })   

            this.$store.commit('updata_total_price')
        },
        cb_right(){
            this.isDel = false
        },
        cb_left(){
            this.isDel = true
        }
    }
})