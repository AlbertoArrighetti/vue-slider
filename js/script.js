const { createApp } = Vue

createApp({
    data() {
        return {

            // mi salvo una variabile dove memorizzo quale sia la slide attiva
            activeSlideIndex: 0,

            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],

        }
    },
    methods: {
        prevSlide(){
            this.activeSlideIndex--;
            // se va oltre lo zero 
            if(this.activeSlideIndex < 0){
                this.activeSlideIndex = this.slides.length - 1;
            }
        },
        nextSlide(){
            this.activeSlideIndex++;
            // se va oltre l'ultima slide 
            if(this.activeSlideIndex >= this.slides.length){
                this.activeSlideIndex = 0;
            }
        },

        // per le thumbnails
        changeSlide(index){
            this.activeSlideIndex = index;
        },
        
        timer() {
            this.autoPlay = setInterval(() => {
                this.nextSlide();
            }, 3000)
        },
        
        stopTimer(){
            clearInterval(this.autoPlay)
        }
    },

    // con mounted faccio partire l'autoplay all'avvio della pagina 
    mounted() {
        this.timer();
    },
}).mount('#app');