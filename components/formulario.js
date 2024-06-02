app.component('formulario-datos',
{
template:
 /*html*/
    
`<form class="nuevo-videojuego" @submit.prevent="onSubmit">


    <label
     for="nombre">Nombre: 
     </label>

     <input 
      id="nombre"
      v-model="nombre">
     <br><br>


    <label 
    for="plataforma">Plataforma:
    </label>


    <select 
    id="plataforma" 
    v-model="plataforma">
    
    <option>Pc</option>


    <option>Play Station</option>


    <option>Xbox One</option>        


  </select><br><br>


  <label 
  for="estado">
  Estado:</label>


    <select id="estado" 
    v-model="estado">

    <option>Pendiente</option>

    <option>Jugando</option>

    <option>Completado</option>        

  </select><br><br>

  <label 
  for="puntaje">Puntaje:
  </label>

  <input type="number" 
  id="puntaje" 
  v-model.number="puntaje">
  <br><br>

  <input class="button" 
  type="submit" 
  value="Registrar Video Juego">

  </form>
 
  
  
  
  `,
  


data(){
    return{ //aca declara las variables
        nombre: "",
        plataforma: null,
        estado: null,
        puntaje: "",
        
    }
  },
  methods:{ 
    onSubmit(){
        if(this.nombre === '' || this.plataforma === null || this.estado === null )//aca valida que ninguno este vacio
        {
            alert("Rellene todos los campos")
            return

        }
        if(this.puntaje < 0 || this.puntaje > 10)
        {
            alert("El puntaje es entre 0 y 10")
            return

        }


debugger
        let videojuegoguardado = {
             //aca lo que hace es asignar lo que se carga en el formulario a cada variable 
            nombre: this.nombre,
            plataforma: this.plataforma,
            estado: this.estado,
            puntaje: this.puntaje

        }
        debugger
        this.$emit('video-juego', videojuegoguardado) 
        debugger

        //aca lo que hace es limpiar el formulario una vez enviado 
        this.nombre="",
        this.plataforma=null,
        this.estado=null,
        this.puntaje = ""
        
    },
},

})