<template>
    <div class="card" style="width: 100%;">
        <div class="card-header">
            Add todo
        </div>
        <form>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <label for="exampleInputEmail1">Name</label>
                    <input v-model="name" class="form-control" placeholder="Enter name">
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </li>
                <li class="list-group-item">
                    <label for="exampleInputEmail1">Detail</label>
                    <input v-model="detail" class="form-control" placeholder="Enter detail">
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </li>
                <li class="list-group-item">
                    <button type="submit" class="btn btn-primary" @click.prevent="processDataTodo">Add</button>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data: function () {
        return {
            name: '',
            detail: '',
        }
    },
    methods: {
        ...mapActions('todo', ['addTodo']),
        processDataTodo: function () {
            this.addTodo({
                id: new Date().valueOf(),
                name: this.name,
                detail: this.detail
            });
        }
    }
}
</script>

<style scope>
    
</style>
