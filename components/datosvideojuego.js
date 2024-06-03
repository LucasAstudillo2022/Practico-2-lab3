app.component('dato-videojuego',
{
    props:{
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
      <tr>
      <th>Nombre</th>
      <th>Plataforma</th>
      <th>Estado</th>
      <th>Puntaje</th>    
      </tr>     
      <tr v-for="dato in datos" :key="dato"  @click="mostrardatos(dato)">
        <td>{{ dato.nombre }}</td>
        <td>{{ dato.plataforma }}</td>
        <td>{{ dato.estado }}</td>
        <td>{{ dato.puntaje }}</td> 
      </tr>    
      </table>
    </div>
   `, 
 methods:{
  mostrardatos(dato){
    debugger
      
    this.$emit('datos-extra', dato)
    console.log(dato)
    debugger
     
   }
 }
    

    
  
})