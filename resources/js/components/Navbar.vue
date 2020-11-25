<template>
  <nav class="flex bg-white items-center dark:bg-black">
    <router-link class="w-7/12 dark:text-dark-text-primary" to="/">
      <h1 class="font-raleway text-2xl font-bold">The RaceBets Million</h1>
    </router-link>
    <ul class="flex w-5/12 justify-end items-center dark:text-dark-text-primary">
      <li>
        <router-link to="/game" :class="{'active': $route.path == '/game' || $route.path == '/'}" class="flex px-2 text-xs">
          <span>Game</span>
        </router-link>
      </li>
      <li><a class="flex px-2 text-xs text-gray-300 dark:text-gray-500">History</router-link></a>
      <li>
        <router-link to="/faq" :class="{'active': $route.path == '/faq'}" class="flex px-2 text-xs">
          <span>FAQ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/terms" :class="{'active': $route.path == '/terms'}" class="flex px-2 text-xs">
          <span>T&amp;Cs</span>
        </router-link>
      </li>
      <li><button @click="toggleDarkMode" type="button" class="flex p-1 text-xs text-white ring-1 rounded ring-yellow-600 bg-yellow-500">Dark mode: {{(darkMode) ? 'off' : 'on'}}</button> </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    computed: {
      darkMode() {
        return this.$store.state.darkMode;
      },
    },
    methods: {
      toggleDarkMode() {
        this.$store.commit('darkMode');
      }
    }
  }
</script>
