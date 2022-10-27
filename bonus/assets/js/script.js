/* Partendo dal markup della versione svolta in js plain (vedi allegato), rifare lo slider ma questa volta usando Vue. */
/* al click su una thumb, visualizzare in grande l'immagine corrispondente


applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente


quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce */
//implemento la funzione createapp 

const {createApp}= Vue

createApp({
    data(){
        return{

            activeImage:0,
            intervalId:null,
           
            slides : [
                {
                    image: 'assets/img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'assets/img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'assets/img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'assets/img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'assets/img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
            
        }
    },
    methods: {
        clickPrev(){
            this.activeImage--
            if (this.activeImage < 0) {
                /* console.log(this.slides.length-1);
                console.log(this.activeImage); */
                this.activeImage=this.slides.length-1
            }
        },
        clickNext(){
            this.activeImage++
            if (this.activeImage===this.slides.length) {
                this.activeImage=0
            }
        },
        clickThumb(index){
            console.log('ho cliccato');
            this.activeImage=index 
            console.log(index);
        },
        setPlay(){
            this.intervalId=setInterval(() => {
                this.clickNext()
            }, 3000);
        }
    },
    mounted(){
        this.setPlay()
    }
}).mount('#app')
