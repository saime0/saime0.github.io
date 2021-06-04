let films = [
    {   
        name: 'HYPERPC AMPERE', 
        duration: "850 000грн", 
         
        actors:"Іван, Степан, Павло, Катя", 
        image:"7.jpg",
        
        about:"Комплектующие",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
       
    },
    {   
        name: 'Паддінгтон', 
        duration: 108, 
         
        actors:"Іван, Степан, Павло, Катя", 
        image:"8.jpg",
       
        about:"2",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
    },
    {   
        name: 'Зелена книга', 
        duration: 108, 
       
        actors:"Іван, Степан, Павло, Катя", 
        image:"9.jpg",
        
        about:"3",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
    },
    {   
        name: '1+1. Недоторкані', 
        duration: 108, 
         
        actors:"Іван, Степан, Павло, Катя", 
        image:"10.jpg",
        about:"1",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
    },
    {   
        name: '1+1. Недоторкані', 
        duration: 108, 
       
        actors:"Іван, Степан, Павло, Катя", 
        image:"11.jpg",
        about:"1",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
    },
    {   
        name: '1+1. Недоторкані', 
        duration: 108, 
       
        actors:"Іван, Степан, Павло, Катя", 
        image:"12.jpg",
        about:"1",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
    },
    {   
        name: '1+1. Недоторкані', 
        duration: 108, 
         
        actors:"Іван, Степан, Павло, Катя", 
        image:"10.jpg",
        about:"1",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
    },
    {   
        name: '1+1. Недоторкані', 
        duration: 108, 
        
        actors:"Іван, Степан, Павло, Катя", 
        image:"10.jpg",
        about:"1",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
    },
    {   
        name: '1+1. Недоторкані', 
        duration: 108, 
      
        actors:"Іван, Степан, Павло, Катя", 
        image:"10.jpg",
        about:"1",
        videocard:"2 x ASUS GeForce RTX 3090 TUF Gaming",
        processor:"AMD Ryzen Threadripper 3990X",
        matplat:"ASUS ROG ZENITH II EXTREME ALPHA",
        opera:"8 x 16GB G.Skill Trident Z Royal DDR4-4000",
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

Vue.createApp(app).mount("#film-app")

