Vue.component('mfq-hosipital',{
    template:`
      <div class='lists'>

        <div class='list_title' @click='toggle'>
            <span class='select-all' :class="{'select-all-active':selectedall}"></span>{{name}}
        </div>

        <mfq-medical
        v-for='(items,i) in list'
        :key='i'
        :id='i'
        :medical_index='i'
        :hospital_index='index'
        :items='items'>

        </mfq-medical>
          
      </div>
    `,
    props:{
        name:{
            type:String,
            required:true
        },
        list:{

        },
        selectedall:{

        },
        index:{

        }
    },
    data(){
        return {
            active:this.selectedall
        }
    },
    methods:{
        toggle(){
            this.$store.commit('change_seleted_all',{
                index:this.index,
                selected_all:!this.selectedall
            })
            this.$store.commit('updata_total_price')
        }
    }
})