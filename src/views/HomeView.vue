<template>
  <main>
    <div class="flower_container">
      <img class="flower" src="../assets/FlowerBanner.png" alt="none" />
    </div>
    <p class="card flex m-auto justify-center items-center mb-2 h-8">
      About the page, I Would have information about what they would do and
      services are provided here.
    </p>
    <div class="container bg-[#f3dfdf]">
      <div class="columns">
        <p class="p_header">Service #1</p>
        <p class="p_header">Service #2</p>
        <p class="p_normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          incidunt dignissimos atque nemo voluptates possimus perspiciatis ab
          beatae accusantium totam voluptate commodi, praesentium, corrupti
          inventore, quidem minima saepe minus eveniet.
        </p>
        <p class="p_normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          incidunt dignissimos atque nemo voluptates possimus perspiciatis ab
          beatae accusantium totam voluptate commodi, praesentium, corrupti
          inventore, quidem minima saepe minus eveniet.
        </p>
        <p class="p_header">Service #3</p>
        <p class="p_header">Service #4</p>
        <p class="p_normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          incidunt dignissimos atque nemo voluptates possimus perspiciatis ab
          beatae accusantium totam voluptate commodi, praesentium, corrupti
          inventore, quidem minima saepe minus eveniet. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Omnis porro doloribus consectetur.
          Nostrum quae molestias, error totam minima neque dolore. Nostrum
          repellendus ipsam iste laudantium. Harum non ratione voluptate dolore.
        </p>
        <p class="p_normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          incidunt dignissimos atque nemo voluptates possimus perspiciatis ab
          beatae accusantium totam voluptate commodi, praesentium, corrupti
          inventore, quidem minima saepe minus eveniet. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Omnis porro doloribus consectetur.
          Nostrum quae molestias, error totam minima neque dolore. Nostrum
          repellendus ipsam iste laudantium. Harum non ratione voluptate dolore.
        </p>
      </div>
      <div>
        <p class="p_header">More information</p>
        <p class="p-1">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 80%;
  margin: 0 auto 0.5rem auto;
}

.container {
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
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
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
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
