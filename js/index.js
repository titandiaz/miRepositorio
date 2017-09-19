const vm = new Vue({
	el: 'main',
	data: {
		//nuevaTarea: null,
		//laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
		// tareas: [
		// {nombre: 'Hacer Tarea', prioridad: 'baja'},
		// {nombre: 'Aprender Vue y Firebase', prioridad: 'alta'},
		// {nombre: 'Ir al Gimnasio', prioridad: 'alta'},
		// ],

		persona: {
			nombre: 'Juan',
			profesion:'dev',
			ciudad: 'valencia'
		},

		// conectado: false,
		// edad: 44,
		methods: {
			agregarTarea(){
				console.log('funciona')
				//this.tareas.unshift(this.nuevaTarea())
			}
		}
	},
});