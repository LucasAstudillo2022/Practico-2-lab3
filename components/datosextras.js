app.component('dato-extra',{
   prop:{
    datos:{
        type: Array,
        requerid:true
        
    }
   },
   template:
    
   /*html*/
   `
   <div class="info-videojuego">
    
   <table border="1">
     <thead>
     <tr>
     <th>Nombre</th>
     <th>Plataforma</th>
     <th>Estado</th>
     <th>Puntaje</th>
     <th>Mas Info</th>
     <th></th>
     </tr>      
       <tr v-for="(dato, index) in datos" :key="index"></th>
       <th>{{ dato.nombre }}</th>
       <th>{{ dato.plataforma }}</th>
       <th>{{ dato.estado }}</th>
       <th>{{ dato.puntaje }}</th>
       
         
     </tr>    
`
   
})