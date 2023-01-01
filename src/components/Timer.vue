<template>
    <div>
        <h1>{{stunden}}:{{minuten}}:{{sekunden}}</h1>
        <div class="d-flex flex-row align-center justify-center">
        <v-btn @click="startStop">
        <v-icon>{{ icon }}</v-icon>
        </v-btn>
        <v-btn @click="reset">
            <v-icon>mdi-restart</v-icon>
        </v-btn>
        </div>
         <div class="d-flex flex-column align-center ">
        <v-text-field v-model.number="inputStunden" min=0 max=100 @input="eingabe" type="number" label="Stunden"/>
        <v-text-field v-model.number="inputMinuten" @input="eingabe" min=0 max=59 type="number" label="Minuten"/>
        <v-text-field v-model.number="inputSekunden" @input="eingabe" min=0 max=59 type="number" label="Sekunden"/>
        </div>
    </div>
</template>

<script>
  import zeit from '../mixins/zeit.js'
  export default {
    name: 'Timer',
    mixins: [zeit],
    data: function() {
        return{
            //für die abgelaufene Zeit
            abgelaufen: 3600,
            //für die Veränderung
            aenderung: -1,
            //für den Timer
            timer: null,
            //für die Eingaben
            inputSekunden: 0,
            inputMinuten: 0,
            inputStunden: 1,
            toggle: 0,
            icon: "mdi-play",
        }
    },
    methods: {
        startStop: function(){
        if(this.toggle == 0){
            this.start();
          }
            
        else{
            this.stop(); 
        }
        
        },
        //den Timer starten
        start: function(){
            this.timer = setInterval(this.countdown, 1000);
            this.toggle = 1;
            this.icon = "mdi-pause";
        },
        //den Timer stoppen
        stop: function(){
            clearTimeout(this.timer);
            this.toggle = 0;
            this.icon = "mdi-play";
        },
        //den Timer zurücksetzen
        reset: function(){
            //den Timer anhalten
            this.stop();
            //und auf 3600 setzen
            this.abgelaufen = 3600;
            this.inputSekunden = 0;
            this.inputMinuten = 0;
            this.inputStunden = 1;
        },
        //zum Runterzählen
        countdown: function() {
            //den Timer runterzählen
            this.veraendern();
            //haben wir 0 erreicht?
            if (this.abgelaufen == 0) {
                //ein Audio abspielen
                let audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
                audio.play();
                //eine Meldung zeigen
                alert('Der Timer ist abgelaufen!');
                //und alle zurücksetzen
                this.reset();
            }
        },
        //bei Veränderungen der Eingabe
        eingabe: function() {
            this.abgelaufen = this.inputSekunden + (this.inputMinuten * 60) + (this.inputStunden * 3600);
        }
    }  
  }
</script>

<style scoped>
    .v-text-field{
      width: 200px;
}
h1{font-size: 15vw;}
</style>
