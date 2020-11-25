<template>
  <div class="flex flex-col pt-8 dark:bg-dark-background">
    <div class="flex flex-col bg-backgroundDark py-8 px-2 items-center dark:bg-dark-background-light">
      <h2 class="flex w-max font-raleway text-2xl font-extrabold dark:text-dark-text-primary">You're currently Logged Out</h2>
      <p class="flex mt-3 text-lg font-light text-center dark:text-dark-text-primary">The page you are trying to access is available for registered customers only. Please login to proceed.</p>
      <button id="loginButton" class="mt-5 bg-primary rounded ring-primary" type="button">Login</button>
    </div>
    <div class="flex flex-col bg-white mt-10 dark:bg-dark-background">
      <h3 class="text-xl font-medium dark:text-dark-text-primary">Current Question</h3>
      <div class="flex mt-2">
        <div class="w-9/12">
          <p class="dark:text-dark-text-primary">
            Town Charter to finish ahead of Thunder Light in the Preis von Bremen?
            <br>
            (Dortmund - Race 2)
          </p>
        </div>
        <div class="w-3/12 text-right">
          <p class="dark:text-dark-text-primary">
            21 h 55 m
            <br>
            left
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
      }
    },
    methods: {

    }
  }
</script>
