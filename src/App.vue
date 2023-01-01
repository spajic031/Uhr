<template>
  <v-app>
    <v-main>
      <Start/>
    </v-main>
  </v-app>
</template>

<script>
import Start from './components/Start';

export default {
  name: 'App',
  components: {
   Start,
  },

  data: () => ({
    //
  }),
};
</script>


