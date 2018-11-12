<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <button type="button" class="v-toolbar__side-icon v-btn v-btn--icon theme--dark" style>
        <div>
            <i aria-hidden="true" class="v-icon material-icons theme--dark">menu</i>&nbsp;&nbsp;
        </div>
      </button>
      <b-navbar-brand tag="h1" href="/">Easy Project</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          <b-nav-item-dropdown text="Table">
              <b-dropdown-item href="#"><router-link v-bind:to="{ name: 'HelloGrid' }">bootstrap-vue</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link v-bind:to="{ name: 'Movie' }">vue-good-table</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link v-bind:to="{ name: 'SmGrid' }">vuetable-2</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link v-bind:to="{ name: 'VuetifyTable' }">Vuetify Table</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">English</b-dropdown-item>
            <b-dropdown-item href="#">Korea</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
