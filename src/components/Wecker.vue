<template>
    <div class="d-flex flex-column align-center justify-center">
        <h1>{{aktStunden}}:{{aktMinuten}}</h1>
        <v-text-field v-model.number="inputStunden" @input="eingabe" min=0 max=23 type="number" label="Stunden"/>
        <v-text-field v-model.number="inputMinuten" @input="eingabe" min=0 max=59 type="number" label="Minuten"/>
        <v-switch v-model="swift1"/>
    </div>
</template>

<script>
  export default {
    name: 'Wecker',
    data: function() {
   
        return{
            //für die aktuelle Zeit
            zeit: null,
            //für den Timer
            timer: null,
            //für die Weckzeit
            inputMinuten: 15,
            inputStunden: 12,
            //für die aktuelle Zeit
            aktMinuten: 0,
            aktStunden: 0,
            swift1: false,
            
        }
    },
    methods: {
        alarm: function() {
             //die Zeit beschaffen
            this.zeitBeschaffen();
            //haben wir die Weckzeit erreicht?
            if (this.swift1 == true && this.aktMinuten == this.inputMinuten && this.aktStunden == this.inputStunden) {
                //ein Audio abspielen
                let audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
                audio.play();
                //eine Meldung zeigen
                alert('Die Weckzeit ist erreicht!');
            }
            
        },
        //bei Veränderungen der Eingabe
        eingabe: function() {
            this.inputStunden = String(this.inputStunden).padStart(2,'0');
            this.inputMinuten = String(this.inputMinuten).padStart(2,'0');   
        },
        zeitBeschaffen: function() {
            this.zeit = new Date();
            this.aktStunden = String(this.zeit.getHours()).padStart(2,'0');
            this.aktMinuten = String(this.zeit.getMinutes()).padStart(2,'0');
        },
    },
    mounted: function() {
        this.zeitBeschaffen();
        //den Timer starten
        this.timer = setInterval(this.alarm, 60000);
    }
}
</script>

<style scoped>
    .v-text-field{
      width: 200px;
}
</style>