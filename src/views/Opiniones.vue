<template>
    <div>
        <div class="container">
            <h1>Opinion</h1>
            <h4>Escribe tu Opinion para el Juego: {{$route.params.gameName }}</h4>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Nombre" v-model="name" />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Opinion</label>
                <textarea class="form-control" placeholder="Tu opinion debe ir aqui..." id="opinion"
                    v-model="opinion"></textarea>
            </div>
            <button class="btn btn-primary text-start  float-start ms-0" v-on:click="agregar" id="boton">{{ editando?'Editar':'Guardar' }}</button>
            <br>
            <br>
            <div>
                <h5>A continuación podrás ver tu opinión:</h5>
                <div v-if="opinionSize == 0" class="alert alert-danger  text-start " role="alert">
                    No existen opiniones para mostar.
                </div>

                <div v-else>
                    <div v-for="(opinion, index) in opiniones" :key="index">
                        <div class="alert alert-primary" role="alert">
                            Opinion creada por: {{ opinion.name }}
                        </div>
                        <p>{{ opinion.opinion }}</p>
                        <button type="button" class="btn btn-danger" v-on:click="eliminar(index)">Eliminar</button>
                        <button type="button" class="btn btn-warning" v-on:click="editar(index)">Editar</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Opiniones-com",
    // props: {},
    data: function () {
        return {
            name: '',
            opinion: '',
            opiniones: [],
            editando: false,
            indexEditado:null,
        };
    },
    computed: {
        nameYopinion: function () {
            return this.name + this.opinion;
        },
        opinionSize: function () {
            return this.opiniones.length
        }
    },
    methods: {

        agregar() {
            if (this.name == '' || this.opinion == '') {
                alert("rellenar campos")
                return
            }
            let myOpinion = {
                name: this.name,
                opinion: this.opinion,
            }
            if(this.editando==true){
                this.opiniones[this.indexEditando]=myOpinion

            }else{
                this.opiniones.push(myOpinion)  
            }
         
            this.name = ''
            this.opinion = ''
            this.editando= false
        },

        editar(index) {
            console.log(index)
            console.log(this.opiniones)
            this.name = this.opiniones[index].name
            this.opinion = this.opiniones[index].opinion
            this.editando=true
            this.indexEditando=index

            
            
        },

        eliminar(index) {
            this.opiniones.splice(index, 1)
        }

    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
};
</script>

<style scoped>
h1 {
    background: rgb(23, 22, 22);
    color: rgb(249, 243, 232)
}

.boton {
    background: rgb(69, 228, 220);
    border: none;
    border-radius: 16%;
    text-align: left;

}
</style>