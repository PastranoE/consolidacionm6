<template>
    <div>
        <div v-if="this.nombre==''">

            <h1> Administración</h1>
            <div class="bordercaja">
                <div>
                    <h5 id="game"><i class="fas fa-thin fa-gamepad fa-2xs" style="color: #ecf0f3;"> Games Opinión</i></h5>
                    <br>
                    <h4>Para ver la informacion ingresa tus datos</h4>
                    <br>
                    <button type="button" class="btn btn-success" @click="Sdatos">Ingresar Datos</button>
                </div>
            </div>
        </div>
        <div v-if="this.nombre!=''">
        <Rcuenta :nombre="nombre" :apellido="apellido"/>
        </div>
    </div>
</template>

<script>
import Rcuenta from '@/views/Rcuenta.vue'
export default {
    name: 'Administracion-com',
    // props: {},
    data: function () {
        
        return {
            nombre: '',
            apellido: '',
        }
    },
    // computed: {},
    methods: {

        Sdatos() {
            this.nombre = prompt("Ingrese Nombre")
            if(this.nombre==''){
                alert("Debe ingresar el nombre")
                return
            }

            this.apellido = prompt("Ingrese Apellido")
            if(this.apellido==''){
                alert("Debe ingresar el apellido")
                return
            }
            
        }

    },
    // watch: {},
    components: {
        Rcuenta
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.bordercaja {
    text-align: center;
    width: 50%;
    border: 2px solid black;
    margin-left: 25%;
    /* padding: 0%; */
}

#game {
    background-color: black;
    color: white;
    text-align: left;
}
</style>