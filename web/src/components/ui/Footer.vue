<template>
  <v-footer color="primary" dark app>
    <v-container>
    <v-row class="justify-between align-center">
        <v-col cols="12" md="4" class="text-center text-md-left">
          © TrackIt
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-btn text to="/">Home</v-btn>
          <v-btn text to="/profile">Profile</v-btn>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-md-right">
          Made with ❤️ by You
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts"></script>
