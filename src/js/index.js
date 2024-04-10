function Data(){
    return {
        toggle: window.innerWidth > 1024, // Inicializar toggle basado en el ancho de la ventana

        Start() {
            if (window.innerWidth <= 1024) { 
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
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 10,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    loop: true,
    });
