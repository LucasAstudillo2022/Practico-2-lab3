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
    :datos="datos"
    @datos-extra="guardardato">
    </dato-videojuego>

    <dato-extra 
    :juego-seleccionado="juegoSeleccionado">
    </dato-extra>
        

    

    
    
   
   
    </div>`,

    data(){
    return{
        titulo:'Nuevo Video Juego',
        datos:[],
        juegoSeleccionado:null
        
    }
    
},
methods:
{
    addInfo(dato) {
        debugger
         
        this.datos.push(dato)
        debugger

    },
    guardardato(dato){
        this.juegoSeleccionado=dato;
        
        debugger

    }
    
}

})

    
    
      
    
        
    
