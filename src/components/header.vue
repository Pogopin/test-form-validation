<template>
  <header class="header">
    <div class=".container">
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/page1">page1</router-link>
        <router-link to="/page2">page2</router-link>  
        <router-link to="/registration">Регистрация</router-link>
        
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 15px;
  }
  nav {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
</style>
