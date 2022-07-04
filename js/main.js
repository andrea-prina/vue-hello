const app = new Vue ({

        el : "#root",

        data : {
            mainMessage : "Inserisci i dati e premi il bottone!!!",
            firstName : "",
            lastName : "",
            profilePicture : "",
            cardClasses : "card d-none"
        },

        methods : {
            displayCard : function(){
                this.cardClasses = "card"
            }
        }
    })