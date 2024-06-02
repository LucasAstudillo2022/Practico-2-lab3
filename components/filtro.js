app.component('filtro-busqueda',{
    props:{

    },
    template:
    /*html*/
    `<div class="filtro">
    <br>
    <label >Nombre: </label><input type="text" >
    <label>Plataforma:</label>
    <select>
    <option>Pc</option>
    <option>Play Station</option>
    <option>Xbox One</option>        
  </select> 
  <label>Estado:</label>
    <select>
    <option>Pendiente</option>
    <option>Jugando</option>
    <option>Completado</option>        
  </select>

    </div>
    `
    
})