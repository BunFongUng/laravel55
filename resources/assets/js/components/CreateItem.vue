<template>
    <div>
        <h1>Create an Item</h1>
        <form v-on:submit.prevent="addItem">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="itemName">Item Name:</label>
                        <input type="text" name="itemName" id="itemName" class="form-control" v-model="item.name">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="itemPrice">ItemPrice</label>
                        <input type="text" name="itemPrice" id="itemPrice" class="form-control" v-model="item.price"> 
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary">Add Item</button> 
                </div>
            </div>
        </form>
    </div>
</template>   

<script>
    export default {
        data() {
            return {
                item: {}
            }
        },
        methods: {
            addItem() {
                let uri = 'http://127.0.0.1:8000/items';
                this.axios.post(uri, this.item).then(res => {
                    this.$router.push({ name: 'DisplayItems' });
                });
            }
        }
    }
</script>