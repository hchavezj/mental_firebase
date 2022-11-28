<template>
  <main>
    <div class="card">
      <p class="p_header">Contact Information</p>
      <table
        class="table-auto m-auto w-[400px] border-separate border-spacing-4"
      >
        <tr>
          <td class="text-right">Address:</td>
          <td class="text-left">123 Main St<br />Mission, TX, 78572</td>
        </tr>
        <tr>
          <td class="text-right">Phone:</td>
          <td class="text-left">123-456-1111</td>
        </tr>
        <tr>
          <td class="text-right">Fax:</td>
          <td class="text-left">123-456-2222</td>
        </tr>
        <tr>
          <td class="text-right">Email:</td>
          <td class="text-left">name@example.com</td>
        </tr>
      </table>
      <img src="../assets/Google-Maps.jpg" alt="Map" class="flex m-auto" />
    </div>
  </main>
</template>

<style scoped>
.card {
  padding: 45px;
}
table {
  table-layout: auto;
  margin: auto;
  border-collapse: separate;
  border-spacing: 15px;
  text-align: left;
}
img {
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "ContactView",
  components: {},
};
</script>
