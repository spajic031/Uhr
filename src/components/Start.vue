<template>
  <div class="d-flex flex-column align-center ">
    <!-- Die Registerkarten -->
    <v-tabs class="d-flex flex-column align-center " v-model="register">
      <v-tab  v-for="eintrag in eintraege" v-bind:key="eintrag.register">
        {{eintrag.register}}
      </v-tab>
    </v-tabs>
    <!-- Die Inhalte der Karten -->
    <!-- Wichtig ist die Synchronisation über eine gemeinsame Eigenschaft -->
    <v-tabs-items vertical v-model="register">
      <v-tab-item class="pt-5" v-for="eintrag in eintraege" v-bind:key="eintrag.register">
        <component v-bind:is="eintrag.inhalt"></component>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import Stoppuhr from './Stoppuhr.vue';
  import Timer from './Timer.vue';
  import Wecker from './Wecker.vue';
  

  export default {
    name: 'Start',
    components: {
      Stoppuhr,
      Timer,
      Wecker
    },
    data: function() {
      return {
        //für die Synchronisation
        register: null,
        //die Registerkarten
        eintraege: [
            { register: 'Stoppuhr', inhalt: 'Stoppuhr' },
            { register: 'Timer', inhalt: 'Timer' },
            { register: 'Wecker', inhalt: 'Wecker' },
        ],
      }
    }
  }
</script>

<style>
  h1 {
    font-size: 500%;
  }
  
</style>