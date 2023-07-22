<template>
   <div>
    <h1> Resumen de tu cuenta</h1>
    {{nombre }}
    {{ apellido }}
    
   </div>
</template>

<script>
export default {
    name: 'rcuenta-com',
    props: {
        nombre:{
            type:String,
/*             require:true */
        },
        apellido:{
            type:String,
/*             require:true */
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>