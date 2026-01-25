<script setup>
import { ref, onMounted } from 'vue';
import { getProducts, addProduct, deleteProduct } from '@/api';

const products = ref([]);
const form = ref({ name: '', price: 0, type: '' });

const fetchProducts = async () => {
  const { data } = await getProducts();
  products.value = data;
};

const createProduct = async () => {
  if (!form.value.name) return;
  await addProduct(form.value);
  form.value = { name: '', price: 0, type: '' };
  fetchProducts();
};

const removeProduct = async (id) => {
  await deleteProduct(id);
  fetchProducts();
};

onMounted(fetchProducts);
</script>

<template>
  <div class="admin">
    <h1>Admin Panel</h1>
    <form @submit.prevent="createProduct">
      <input v-model="form.name" placeholder="Name" />
      <input v-model.number="form.price" placeholder="Price" type="number" />
      <input v-model="form.type" placeholder="Type" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="p in products" :key="p._id">
        {{ p.name }} - {{ p.price }}
        <button @click="removeProduct(p._id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.admin {
  max-width: 600px;
  margin: 20px auto;
}
form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 4px 8px;
}
</style>

