<template>
    <div >
        <h1 style="font-size:5rem">{{stunden}}:{{minuten}}:{{sekunden}}</h1>
        <div class="d-flex flex-row align-center justify-center">
        <v-btn @click="startStop">
        <v-icon>{{ icon }}</v-icon>
        </v-btn>
        <v-btn @click="reset">
            <v-icon>mdi-restart</v-icon>
        </v-btn>
        </div>
    </div>
</template>

<script>
  import zeit from '../mixins/zeit.js'
  export default {
    name: 'Stoppuhr',
    mixins: [zeit],
    data: function() {
        return{
            //für die abgelaufene Zeit
            abgelaufen: 0,
            //für die Veränderung
            aenderung: 1,
            //für den Timer
            timer: null,
            toggle: 0,
            icon: "mdi-play",
        }
    },
    methods: {
        startStop: function(){
        if(this.toggle == 0){
            this.start();
            this.toggle = 1;}
            
        else{
            this.stop();
            this.toggle = 0;
            
        }
        
        },
        //den Timer starten
        start: function(){
            this.timer = setInterval(this.veraendern, 1000);
            this.icon = "mdi-pause";
            
        },
        //den Timer stoppen
        stop: function(){
            clearTimeout(this.timer);
            this.icon = "mdi-play";
        },
        //den Timer zurücksetzen
        reset: function(){
            //den Timer anhalten
            this.stop();
            //und auf 0 setzen
            this.abgelaufen = 0;
        }
    }
  }
</script>
