let films = [
    {   
        name: 'HYPERPC AMPERE', 
        duration: "850 000грн", 
        actors:"Іван, Степан, Павло, Катя", 
        image:"ampere.png",
        about:"Комплектующие",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
       
    },
    {
        name: 'HYPERPC DYNAMIC', 
        duration: "270 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"dynamic.png",
        about:"1",
        videocard:"Palit GeForce RTX 3080 Ti Gaming Pro",
        processor:"Intel® Core™ i9-11900K(F)",
        matplat:"ASUS ROG MAXIMUS XIII HERO",
        opera:"4 x 16GB HyperX Predator RGB DDR4-3200",
    },
    {
        name: 'HYPERPC CONCEPT 4',
        duration: "810 000 грн" , 
        actors:"Іван, Степан, Павло, Катя", 
        image:"concept.png",
        about:"Комплектующие",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:" 8 x 16GB G.Skill Trident Z Royal DDR4-4000",
    },
    
    {
        name: 'HYPERPC CYBER PLATINUM', 
        duration: "330 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"cyber.png",
        about:"1",
        videocard:"ASUS GeForce RTX 3090 STRIX",
        processor:"Intel® Core™ i9-11900K(F)",
        matplat:"ASUS ROG MAXIMUS XIII HERO",
        opera:"4 x 16GB Corsair Dominator Platinum RGB DDR4 3000",
    },
    {
        name: 'HYPERPC VOLT V2', 
        duration: "450 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"volt.png",
        about:"1",
        videocard:"MSI GeForce RTX 3080 Ti GAMING X TRIO",
        processor:"Intel® Core™ i9-11900K(F)",
        matplat:"ASUS ROG MAXIMUS XIII HERO",
        opera:"4 x 16GB HyperX Predator RGB DDR4-3200",
    },
   { name: "HYPERPC INVADER", 
        duration: "215 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"invader.png",
        about:"1",
        videocard:"ASUS GeForce RTX 3080 Ti TUF",
        processor:"Intel® Core™ i9-11900K(F)",
        matplat:"ASUS ROG MAXIMUS XIII HERO",
        opera:"2 x 16GB HyperX Predator RGB DDR4-3200",
    },
    {
        name: 'HYPERPC DESK PLUS', 
        duration:  "750 000 грн", 
        actors:"Іван, Степан, Павло, Катя", 
        image:"desk.png",
        about:"Комплектующие",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"  2 x AMD Ryzen 9 5950X",
        matplat:"  2 x ASUS ROG CROSSHAIR VIII DARK HERO",
        opera:" 8 x 16GB HyperX Predator RGB DDR4-3600",

    },
    
    
    {
        name: 'HYPERPC PLAY v2', 
        duration: "95 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"play.png",
        about:"1",
        videocard:"NVIDIA GeForce RTX 3080 для ноутбуков",
        processor:"AMD Ryzen 7 5800H",
        display:"15.6, 2560 x 1440px, 165 Гц, IPS, 3мс",
        opera:"2 x 16GB HyperX Impact DDR4-3200",
    },

 {
        name: 'MSI Creator 17 Extrem', 
        duration: "120 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"msi1.png",
        about:"1",
        videocard:"NVIDIA GeForce RTX 2080 Super Max-Q",
        processor:" Intel Core i7-10875H",
        display:"17.3  3840х2160",
        opera:"32GB DDR4",
    },
{
        name: 'MSI GS66 Stealth Optimal', 
        duration: "110 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"msi2.png",
        about:"1",
        videocard:" NVIDIA GeForce RTX 3080",
        processor:" Intel Core i7-10875H",
        display:"15.6  1920х1080",
        opera:"32GB DDR4",
    },
{
        name: 'Acer Predator Helios 300 ', 
        duration: "100 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"predator300.png",
        about:"1",
        videocard:" NVIDIA GeForce RTX 3080",
        processor:" Intel Core i7-10875H",
        display:"15.6 (1920x1080) Full HD 300 Гц",
        opera:"32GB DDR4",
    },

{
        name: 'Acer Predator Helios 700 ', 
        duration: "100 000 грн", 

        actors:"Іван, Степан, Павло, Катя", 
        image:"predator700.png",
        about:"1",
        videocard:" NVIDIA GeForce RTX 2070 Super",
        processor:" Intel Core i7-10875H",
        display:"17.3'' (1920x1080) Full HD 144 Гц",
        opera:"32GB DDR4",
    },
];


let app = {
    data() {
        return {
            films:films,
            searchString:'',
            currentIndex: -1,
            modalNum:-1,
            showPr: true,
        }
    },
    methods: {
        modalShow(index){
            this.currentIndex = index;
        }, 
        modalHide(){
            this.currentIndex = -1;
        },
        showDetail(index) {
            this.modalNum = index;
        },
        hideDetail(){
            this.modalNum = -1
        },
        showPreloader(){
            setTimeout(()=>{
                this.showPr = false;
            }, 1000)
        },
        
    },
    mounted() {
        this.showPreloader()
    },
    computed: {
        myFilter(){
            let search = this.searchString;//скорочуємо змінну
            if (!search){//якщо змінна пуста
                return this.films;//показуємо всі фільми
            }
            search = search.trim().toLowerCase();//обрізаємо пробіли і малі букви робимо

            return this.films.filter(//запускаємо фільтр
                item => {//кожен асоціативний масивчик (один фільм)
                    if (item.name.toLowerCase().indexOf(search) != -1){
                        return item;//фільми, що підходять
                    }
                })
        }
    },

    

}


let formRegister = document.querySelector('#window');
let button = document.querySelector('.regButton');
let divClose = document.querySelector('.close');

let shadow = document.createElement('div');
shadow.id = 'shadow';


function open(){
    document.body.appendChild(shadow);
    formRegister.style.opacity = 1;
}
function close(){
    shadow.parentNode.removeChild(shadow);
    formRegister.style.opacity = 0;
}
button.onclick = open;
divClose.onclick = close;
shadow.onclick = close;
Vue.createApp(app).mount("#film-app")

