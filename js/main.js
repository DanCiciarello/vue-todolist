new Vue({
    el: "#app",

    // App data
    data: {
        toDoList: [
            {
                text: "Imparare Vue",
                isDone: false,
            },
            {
                text: "Fare la spesa",
                isDone: false,
            },
            {
                text: "Portare fuori il cane",
                isDone: false,
            },
            {
                text: "Aprire un ticket",
                isDone: false,
            },
        ],
        newToDoText: "",
    },

    // App methods
    methods: {

        // Rimuovi to do
        removeItem(index) {
            // Elimino l'oggetto dell'array all'indice selezionato
            this.toDoList.splice(index, 1);
        },

        // Aggiungi to do
        addItem() {
            if (this.newToDoText === "") {
            } else {
            // Pusho il nuovo oggetto nell'array
            this.toDoList.push({
                text: this.newToDoText,
                isDone: false,
            });
            };

            // Resetto la variabile dell'input
            this.newToDoText = "";
        },
    },

});