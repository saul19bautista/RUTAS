<script>
   export default {
    data(){
        return {
            alumnos: [
                {nc:123457, nombre: 'Saul', carrera:'ISC'},
                {nc:123456, nombre: 'Mario',carrera:'TICS'},
                {nc:123458, nombre: 'Pedro', carrera:'ISC'},
            ]
        }
    }
   }
</script>
<template>

<div class="Container">
    <h3 class="mt-4">Lista de alumnos</h3>
    <ul>
        <li v-for="alumno in  alumnos" :key="alumno.nc">
             <strong>{{ alumno.nombre }} </strong> -
             <strong>{{ alumno.carrera }} </strong>
        </li>
    </ul>
</div>
</template>
<style>
h3{
    color: white;
    background-color: black;
    border-radius: 15 px;
    padding: 10px;
}
ul{
  list-style-type: none;  
  padding: 0%;
}
li{
    color: white;
    background-color: black;
    border-radius: 15 px;
    padding: 10px;
    margin: 10px;

}
</style>