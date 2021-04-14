<template>
    <div>
        商品列表
    </div>
</template>

<script>
import {GoodsAll} from '../../util/apis'
export default {
    mounted() {
        GoodsAll().then(d=>console.log(d))
    },
}
</script>