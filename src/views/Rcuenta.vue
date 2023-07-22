<template>
    <div>
        <div>
            <!-- Sidebar negro -->
            <div class="sidebar">
                <i class="fas fa-user " style="color: #eff3fa;"></i>
                <h3>Bienvenido </h3>
                <h3>{{ nombre }} {{ apellido }}</h3>
            </div>
        </div>
        <div class="content">
            <div class="col-sm-6">
                <div class="titulo">
                    <h5>Resumen de tu cuenta</h5>
                    <p>Le diste me gusta al juego: <b> {{ juego }} </b> </p>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">¿Deseas Comprar Coin Para este Juego?</h6>
                        <a href="#" class="btn btn-warning" @click="AddCoin"><i class=" fas fa-coins"></i>Agregar Coins</a>
                        <hr>
                        <h4>Cantidad de coins comprados</h4>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
                            aria-valuemin="0" aria-valuemax="50">
                            <div  class="progress-bar"  :class="color" :style="{width: coins*2 +'%'}"  aria-valuemax="50">$ {{ coins }}</div>
                        </div>
                    </div>

                </div>
                
            </div>
            <br>
            <div class="row" id="record">
                    <div class="col-sm-4" id="a">
                        <p>
                            % finalizacion de juego
                        </p>
                        <hr>
                        <p>
                           17%   <i class=" fas fa-star-half" ></i>
                        </p>
                    </div>
                    <div class="col-sm-4" id="b">
                        <p id="v">
Logros en el juego
                        </p>
                        <hr>
                        <p id="v">
                             166  <i class=" fas fa-trophy" ></i> 
                        </p>
                    </div>
                    <div class="col-sm-4" id="c">
                        <p>Recompensas</p>
                        <hr>
                        
                        <p>200  <i class=" fas fa-award"  ></i></p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rcuenta-com',
    props: {
        juego: {
            type: String,
        },
        nombre: {
            type: String,
            /*             require:true */
        },
        apellido: {
            type: String,
            /*             require:true */
        }
    },
    data: function () {
        return {
            coins:0,
            color:'bg-success'
        }
    },
    // computed: {},
    methods: {
        AddCoin(){
            if(this.coins>=50){
                alert("coins llenos")
                return
            }else{
                this.coins+=5
            }
            if(this.coins>20 && this.coins <=30){
                this.color= 'bg-warning'
            }
            else if(this.coins>30){
                this.color= 'bg-danger'
            }
            
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
#v{
color: #fff;
}
#record{
    width: 80%;
}
#a{
    background: rgba(240, 161, 3, 0.889);
}
#b{
    background: rgb(29, 113, 29);
}
#c{
    background: rgb(26, 243, 239);
}
.titulo {
    text-align: left;
}

p {
    color: #080808;
}

h3 {
    color: #888585;
}

/* Estilos para el sidebar */
.sidebar {
    margin-right: 5%;
    background-color: #000;
    /* Color negro */
    width: 25%;
    /* 30% del ancho total */
    height: 100vh;
    /* 100% de la altura del viewport */
    float: left;
    /* Alinear a la izquierda */
}

/* Estilos para el contenido principal */
.content {
    background-color: #fff;
    /* Color blanco */
    width: 70%;
    /* 70% del ancho total */
    height: 100vh;
    /* 100% de la altura del viewport */
    float: left;
    /* Alinear a la izquierda */
}
</style>