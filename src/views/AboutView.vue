<template>
  <main>
    <div class="card">
      <p class="p_header">About Me</p>
      <div class="flex">
        <img src="../assets/profile.jpg" alt="none" class="h-32" />
        <table class="table-auto border-separate border-spacing-x-2">
          <tr>
            <td class="text_left">Name:</td>
            <td class="text_left">Jane Smith</td>
          </tr>
          <tr>
            <td class="text_left">Education:</td>
            <td class="text-left">MBA from Fake College</td>
          </tr>
        </table>
      </div>
      <p class="text_left_2">
        My Name is Jane. I graduated from some college and. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Id facilis sit quae ipsa
        laboriosam possimus dolores numquam nesciunt excepturi eos, corrupti
        impedit quibusdam quo distinctio nemo voluptatibus nisi! Recusandae,
        porro!
      </p>
    </div>
  </main>
</template>

<style scoped>
.card {
  padding: 45px;
}

img {
  height: 8rem;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 5px 5px 0 rgba(0, 0, 0, 0.14);
  filter: drop-shadow(0 0 0.8rem rgb(45, 54, 71));
}

table {
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 15px;
  margin-top: 10px;
}

.text_rigt {
  text-align: right;
}

.text_left {
  text-align: left;
}
.text_left_2 {
  text-align: left;
  padding-top: 2rem;
}
</style>
