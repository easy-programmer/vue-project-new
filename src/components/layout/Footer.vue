<template>
  <div id="app">
    <!-- <footer class="footer">
        <b-navbar toggleable="md" type="dark" variant="secondary">
        &copy; Easy Project New
        </b-navbar>
    </footer> -->
    <v-footer app dark height="auto">
        <v-divider></v-divider>
        <v-card class="flex" flat tile>
            <v-card-actions class="grey darken-3 justify-center">
                &copy;2018 — <strong>Easy Project New</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
  </div>
</template>

<style>
.flex {
    padding: 0px;
    width: 100%;
}
.footer {
  flex-shrink: 0;
}
</style>