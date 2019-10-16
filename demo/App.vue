<template>
  <div id="demo" :class="{'collapsed' : collapsed}">
    <v-card>
      <v-toolbar color="#2A2A2E" height="50px">
        <v-toolbar-title
          v-if="this.$store.state.isOnline"
          style="color: white; font-size: 120%;"
        >Angemeldet als: {{this.$store.state.firstName + " " + this.$store.state.lastName}}</v-toolbar-title>
        <v-toobar-title v-else style="color: white">Gast</v-toobar-title>

        <v-spacer></v-spacer>
        <div v-if="!(this.$store.state.isOnline)">
          <v-btn small @click="register">Registrieren</v-btn>
          <v-btn small @click="login">Anmelden</v-btn>
        </div>
        <div v-else>
          <v-btn small @click="logout">Abmelden</v-btn>
        </div>
      </v-toolbar>
    </v-card>
    <sidebar-menu :menu="fetchmenu" :collapsed="collapsed" @collapse="onCollapse"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  ropeName: "asd",
  data() {
    return {
      menu: [],
      collapsed: true
    };
  },
  methods: {
    onCollapse(val) {
      console.log(`collapsed ${val}`);
      this.collapsed = val;
    },
    act() {
      if (this.$store.state.isOnline == true) {
        this.menu.push({
          href: "/Facilities",
          title: "Anlagen",
          icon: "fa fa-subway"
        });
        this.menu.push({
          href: "/EarlierInspections",
          title: "Frühere Inspektionen",
          icon: "fa fa-newspaper"
        });
      }
    },
    logout(){
      this.$router.push('Logout');
    },
    login(){
      this.$router.push('Login');
    },
    register(){
      this.$router.push('Register');
    }
  },
  beforeMount() {
    if (this.$store.state.isOnline == true) {
      this.menu.push({
        href: "/Facilities",
        title: "Anlagen",
        icon: "fa fa-subway"
      });
      this.menu.push({
        href: "/EarlierInspections",
        title: "Frühere Inspektionen",
        icon: "fa fa-newspaper"
      });
    }
  },
  computed: {
    fetchmenu() {
      return this.$store.state.menue;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");

@media (min-width: 320px) and (orientation: portrait) {
  body {
    font-family: "Source Sans Pro", sans-serif;
    background-image: url("/src/styles/images/backgroundV.jpg");
  }
}

@media (min-width: 400px) and (orientation: landscape) {
  body {
    font-family: "Source Sans Pro", sans-serif;
    background-image: url("/src/styles/images/backgroundH.jpg");
  }
}

@media (min-width: 1025px) {
  body {
    font-family: "Source Sans Pro", sans-serif;
    background-image: url("/src/styles/images/backgroundPC.jpg");
  }
}

#demo {
  padding-left: 250px;
}

#demo.collapsed {
  padding-left: 50px;
}

table.v-table thead th {
  font-size: 120%;
}
</style>
