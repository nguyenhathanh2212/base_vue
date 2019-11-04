<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-header">Todo list</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <add-todo-component></add-todo-component>
                            </div>
                            <div class="col-8">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                <div class="card-footer">End</div>
            </div>
        </div>
        <router-link :to="{ name: 'helloworld' }">helloworld</router-link>
    </div>
</template>

<script>
import AddTodo from './AddTodo.vue';

export default {
    components: {
        addTodoComponent: AddTodo
    },
}
</script>

<style scope>

</style>
