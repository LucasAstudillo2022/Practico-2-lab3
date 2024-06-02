app.component('mas-info',{
    template:
    /*html*/
` 
<li v-for="(dato, index) in datos" :key="index">
<ul>{{dato.nombre}}{{dato.estado}}{{dato.plataforma}}{{dato.puntaje}}
</li>
`
})