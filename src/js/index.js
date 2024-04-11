function Data(){
    return {
        toggle: window.innerWidth > 845, // Inicializar toggle basado en el ancho de la ventana

        Start() {
            if (window.innerWidth <= 845) { // Si la pantalla es menor o igual a 768px
                this.toggle = false; // Sobrescribir toggle a false
            }
        },
        SetToggle(){
            this.toggle =!this.toggle;
        },
        GetToggle(){
            return this.toggle;
        }
    }
}