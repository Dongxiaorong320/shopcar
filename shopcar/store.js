const store = new Vuex.Store({
    state:{
        hospital_list:[],
        total_price:0
    },
    mutations:{
         updata_hospital_list(state,data){
            state.hospital_list = data
         },
         change_seleted_all(state,data){
            state.hospital_list.forEach((item,index)=>{
                if(index===data.index){
                    item.selected_all = data.selected_all
                    item.medical_list.forEach((value)=>{
                        value.checked = data.selected_all
                    })
                }
            })
         },
         change_medical_checked(state,data){
            state.hospital_list.forEach((v,i)=>{
                if(i==data.hospital_index){
                    v.medical_list.forEach((item,index)=>{
                        if(index==data.medical_index){
                            item.checked = data.checked
                        }
                    })
                }
            })
            
            var flag = true;
            state.hospital_list.forEach((v,i)=>{
                if(i==data.hospital_index){
                    v.medical_list.forEach((item,index)=>{
                        if(!item.checked){
                            flag = false
                        }
                    })
                }  
            })

            state.hospital_list.forEach((item,index)=>{
                if(index==data.hospital_index){
                   item.selected_all = flag 
                }
            })

         },
         change_medical_count(state,data){
            //  console.log(data)
            state.hospital_list[data.hospital_index].medical_list[data.hospital_index].count = data.count;

            let sum = 0;
            state.hospital_list.forEach((item,index)=>{
                item.medical_list.forEach((v,i)=>{
                    if(v.checked){
                        sum += v.count * v.price
                    }
                })
            })

         },
         updata_total_price(state){
            let sum = 0;
            state.hospital_list.forEach((item,index)=>{
                item.medical_list.forEach((v,i)=>{
                    if(v.checked){
                        sum += v.count * v.price
                    }
                })
            })
            state.total_price = sum
         }    
    },
    actions:{
        fetch_hospital_list({commit}){
            fetch('./Hosipical.json').then(res => {
                return res.json()
            }).then(res => {
                //this.list_data = res.hospital_list
                commit('updata_hospital_list',res['hospital_list'])
            })
        }
    }
})
// store.subscribe(function(data){
//     console.log(data)
// })