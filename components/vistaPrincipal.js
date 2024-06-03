app.component('vista-principal',{
    props:{
        

    },
    template:
    /*html*/
    `<div class="vista">
    <h1>{{titulo}}</h1>



    
    

    <formulario-datos
    @video-juego="addInfo">
    </formulario-datos>
    <br>
    <br>



    <dato-videojuego
    v-if="datos.length" 
    :datos="datos">
    </review-list>

    <dato-extra :@datos-extra></dato-extra>




    

    <!--<filtro-busqueda ></filtro-busqueda><br><br>-->
    

    

    
    
   
   
    </div>`,

    data(){
    return{
        titulo:'Nuevo Video Juego',
        datos:[]
        
    }
    
},
methods:
{
    addInfo(dato) {
        debugger
         
        this.datos.push(dato)
        debugger

    },
    mostrardatos(dato){
      
        this.$emit('datos-extra', dato)
         
       }
}

})

    
    
      
    
        
    
