Vue.component('mfq-footer',{
    template:`
        <div class="fot">
            <p>
                总金额:<span><slot></slot></span>
            </p>
            <span class="shen">
                申请分期
            </span>
        </div>
    `
})