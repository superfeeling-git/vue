<template>
    <div>
        <v-nav></v-nav>
        <router-view></router-view>
    </div>
</template>
<script>
import vNav from '../../components/Nav'
export default {
    components:{
        vNav
    }
}
</script>