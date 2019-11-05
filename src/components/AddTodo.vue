<template>
    <div class="card" style="width: 100%;">
        <div class="card-header">
            Add todo
        </div>
        <form>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <input v-model.trim="$v.name.$model" class="form-control" placeholder="Enter name" :class="{ 'is-invalid': $v.name.$error }">
                    <div class="invalid-feedback">
                        <label v-if="!$v.name.required" class="form-text error">Field is required</label>
                        <label v-if="!$v.name.minLength" class="form-text error">Name must have at least {{$v.name.$params.minLength.min}} letters.</label>
                    </div>
                </li>
                <li class="list-group-item">
                    <input v-model="$v.detail.$model" class="form-control" :class="{ 'is-invalid': $v.detail.$error }" placeholder="Enter detail">
                    <div class="invalid-feedback">
                        <label v-if="!$v.detail.required" class="form-text error">Field is required</label>
                        <label v-if="!$v.detail.minLength" class="form-text error">Detail must have at least {{$v.detail.$params.minLength.min}} letters.</label>
                    </div>
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
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    data: function () {
        return {
            name: '',
            detail: '',
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4),
        },
        detail: {
            required,
            minLength: minLength(4),
        }
    },
    methods: {
        ...mapActions('todo', ['addTodo']),
        processDataTodo: function () {
            this.$v.$touch();

            if (!this.$v.$invalid) {
                this.addTodo({
                    id: new Date().valueOf(),
                    name: this.name,
                    detail: this.detail
                });
            }
        }
    },
}
</script>

<style scope>
    
</style>
