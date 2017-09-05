<template>
    <div>
        <h1>Items</h1>

        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">Create Item</router-link>
            </div>
        </div>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <router-link :to="{ name:'EditItem', params: { id: item.id}}" class="btn btn-primary">Edit</router-link>
                        <button type="button" class="btn btn-danger" v-on:click="deleteItem(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: []
            }
        },
        created: function() {
          this.fetchItems();  
        },
        methods: {
            fetchItems() {
                let uri = 'http://127.0.0.1:8000/items';
                this.axios.get(uri).then(res => {
                    this.items = res.data;
                });
            },
            deleteItem(itemId) {
                let uri = `http://127.0.0.1:8000/items/${itemId}`;
                this.items.splice(itemId, 1);
                this.axios.delete(uri);
                this.fetchItems();
            }
        }
    }
</script>