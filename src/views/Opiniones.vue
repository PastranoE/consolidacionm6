<template>
    <div>
        <div class="container">
            <h1>Opinion</h1>
            <h4>Escribe tu Opinion para el Juego:</h4>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Nombre" v-model="name" />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Opinion</label>
                <textarea class="form-control" placeholder="Tu opinion debe ir aqui..." id="opinion"
                v-model="opinion"></textarea>
            </div>
            <button class="btn btn-primary text-start  float-start ms-0" v-on:click="agregar">Agregar</button>
            <br>
            <br>
            <div>
                <h5>A continuación podrás ver tu opinión:</h5>
                <div v-if="opinionSize==0" class="alert alert-danger  text-start " role="alert">
                    No existen opiniones para mostar.
                </div>
                <div v-else>
                    <p>{{ opiniones }}</p>
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
            opiniones:[],
        };
    },
    computed: {
        nameYopinion: function () {
            return this.name + this.opinion;
        },
        opinionSize: function(){
        return this.opiniones.length
        }
    },
    methods: {

        agregar(){
            if(this.name==''|| this.opinion==''){
            alert("rellenar campos")
            return
            }
            let myOpinion={
                name: this.name,
                opinion: this.opinion,
            }
            this.opiniones.push(myOpinion)
            this.name=''
            this.opinion=''

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

button {
    background: rgb(69, 228, 220);
    border: none;
    border-radius: 16%;
    text-align: left;

}
</style>