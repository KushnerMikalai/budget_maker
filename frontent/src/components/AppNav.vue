<template>
  <nav class="k-nav">
    <ul class="k-menu">
      <li v-for="itemMenu in nav.menu" :key="itemMenu.id">
        <router-link :to="itemMenu.url">{{ itemMenu.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'AppNav',
    data() {
      return {
        nav: {
          menu: [
            { name: 'App', url: '/dashboard', id: 1 },
            { name: 'Home', url: '/', id: 2 },
            { name: 'About', url: '/about', id: 3 },
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .k-menu {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }
  .k-menu li {
    margin: 0 1rem;
  }
</style>