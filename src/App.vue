<template>
  <main font-sans text="center gray-700 dark:gray-200">
    <Header />
    <section sm:p="x-4 y-2" class="h-max-[100vh-72px] overflow-auto">
      <router-view />
      <Footer />
    </section>
  </main>
</template>

<style>
*::-webkit-scrollbar {
  width: 0.5rem;
}
*::-webkit-scrollbar-track {
  background-color: #84c6cf00;
  -webkit-box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.62);
  box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.62);
}
*::-webkit-scrollbar-thumb {
  border-radius: 7px;
  width: 0.6rem;
  background-color: #0071bc;
}

@keyframes gradient-rotate{
0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0% 50%;
}
}
</style>
