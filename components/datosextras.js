app.component('dato-extra',{
   props:{
    juegoSeleccionado:{
        type: Object,
        requerid:true
        
        
    }
   },
   template:
    
   /*html*/
   `

   <div class="info-videojuego" v-if="juegoSeleccionado!=null">
   <ul>
       <li>Nombre: {{ juegoSeleccionado.nombre }} </li>
       <li>Plataforma: {{ juegoSeleccionado.plataforma }} </li>
       <li>Estado: {{ juegoSeleccionado.estado }} </li>
       <li>Puntaje: {{ juegoSeleccionado.puntaje }} </li>    
       </ul>
       
         
      
     </div>`,    
    


   
})