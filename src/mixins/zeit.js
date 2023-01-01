export default {
    computed: {
        //für die Sekunden
        sekunden: function() {
            return String(this.abgelaufen % 60).padStart(2,"0");
        },
        //für die Minuten
        minuten: function() {
            return String(Math.floor(this.abgelaufen / 60) % 60).padStart(2,"0");
        },
        //für die Stunden
        stunden: function() {
            return String(Math.floor(this.abgelaufen / 3600)).padStart(2,"0");
        }
    },
    methods: {
        //die Methode wird durch den Timer aufgerufen
        veraendern: function(){
            this.abgelaufen = this.abgelaufen + this.aenderung;
        }
    }
  }