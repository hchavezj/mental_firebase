<template>
  <div
    class="flex m-auto mt-2 mb-2 justify-center items-center h-[150px] text-[4rem] bg-[url('../src/assets/3ccc.jpg')] bg-cover bg-center max-h-40 max-w-[80%]"
  >
    <p>Krystal Clear Mental Health</p>
  </div>
  <nav
    class="flex justify-center items-center m-auto mb-[10px] text-[1.2rem] bg-[#f3dfdf] max-w-[80%] h-[50px]"
  >
    <router-link to="/">Home</router-link>&nbsp;|&nbsp;
    <router-link to="/about">About</router-link>&nbsp;|&nbsp;
    <router-link to="/contact">Contact</router-link>&nbsp;|&nbsp;
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Quicksand, Avenir, Helvetica, Arial, sans-serif, "Special Elite";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9b6b5;
  margin: auto;
  text-align: center;
  max-width: 80%;
}

nav a {
  font-weight: bold;
  color: #5c5e7a;
}

nav a.router-link-exact-active {
  color: #55596b;
  filter: drop-shadow(0 0 0.06rem rgb(80, 69, 69));
}

li,
a {
  text-decoration: none;
}

body {
  background-color: #f9b6b5;
}

.card {
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.p_header {
  font-family: "Special Elite";
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
</style>
