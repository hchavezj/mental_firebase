<template>
  <div class="card">
    <p class="p_header">Contact Information</p>
    <table class="table-auto m-auto w-[400px] border-separate border-spacing-4">
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
  </div>
</template>

<style scoped>
.card {
  padding: 45px;
  max-width: 80%;
}
table {
  table-layout: auto;
  margin: auto;
  border-collapse: separate;
  border-spacing: 15px;
  text-align: left;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "ContactView",
  components: {},
};
</script>
