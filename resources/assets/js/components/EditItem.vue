<template>
    <div>
        <h1>Update Item</h1>

        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'DisplayItems' }" class="btn btn-success">Return to Items</router-link>
            </div>
        </div>

        <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label for="itemName">Item Name</label>
                <input type="text" name="itemName" id="itemName" v-model="item.name" class="form-control">
            </div>

            <div class="form-group">
                <label for="itemPrice">Item Price</label>
                <input type="text" name="itemPrice" id="itemPrice" class="form-control" v-model="item.price">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">Update </button>
            </div>  
        </form>
    </div>
</template>

<script>
    const BASE_URL = 'http://127.0.0.1:8000/items/';
    export default {
        data() {
            return {
                item: {}
            }
        },
        created: function() {
            this.getItem();
        },
        methods: {
            getItem() {
                let queryParams = this.$route.params.id;
                let queryURL = `${BASE_URL}${queryParams}/edit`;
                
                this.axios.get(queryURL).then(res => {
                    this.item = res.data;
                });
            },
            updateItem() {
                let queryParams = this.$route.params.id;
                let uri = `${BASE_URL}${queryParams}`;
                this.axios.patch(uri, this.item).then(res => {
                    this.$router.push({ name: 'DisplayItems' });
                });
            }
        }
    }
</script>
