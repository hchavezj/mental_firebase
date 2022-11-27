<template>
  <main>
    <div class="flower_container">
      <img class="flower" src="../assets/FlowerBanner.png" alt="none" />
    </div>
    <p class="card pb-2 mb-2">
      About the page, I Would have information about what they would do and
      services are provided here.
    </p>
    <div class="columns card">
      <p class="p_header">Header</p>
      <p class="p_header">Header</p>
      <p class="p_normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        incidunt dignissimos atque nemo voluptates possimus perspiciatis ab beatae
        accusantium totam voluptate commodi, praesentium, corrupti inventore,
        quidem minima saepe minus eveniet.
      </p>
      <p class="p_normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        incidunt dignissimos atque nemo voluptates possimus perspiciatis ab beatae
        accusantium totam voluptate commodi, praesentium, corrupti inventore,
        quidem minima saepe minus eveniet.
      </p>
      <p class="p_header">Header</p>
      <p class="p_header">Header</p>
      <p class="p_normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        incidunt dignissimos atque nemo voluptates possimus perspiciatis ab beatae
        accusantium totam voluptate commodi, praesentium, corrupti inventore,
        quidem minima saepe minus eveniet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis porro doloribus consectetur. Nostrum quae
        molestias, error totam minima neque dolore. Nostrum repellendus ipsam iste
        laudantium. Harum non ratione voluptate dolore.
      </p>
      <p class="p_normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        incidunt dignissimos atque nemo voluptates possimus perspiciatis ab beatae
        accusantium totam voluptate commodi, praesentium, corrupti inventore,
        quidem minima saepe minus eveniet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Omnis porro doloribus consectetur. Nostrum quae
        molestias, error totam minima neque dolore. Nostrum repellendus ipsam iste
        laudantium. Harum non ratione voluptate dolore.
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 80%;
  margin: 0 auto 0.5rem auto;
}

.flower_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.flower {
  object-fit: cover;
  max-height: 800px;
  max-width: 100%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.column {
  column-rule: 2px solid rgba(0, 0, 0, 0.2);
}

.p_header {
  font-weight: 700px;
  font-family: "Special Elite";
  font-size: 2rem;
}
.p_normal {
  padding: 0.5rem;
}
.columns {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  padding-block: 2rem;
  margin-inline: auto;
}

</style>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
