import { mapActions } from 'vuex';
<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
        <div class="fadeIn first">
            <img src="https://www.sccpre.cat/mypng/detail/59-591411_icons8-flat-todo-list-logo-todolist.png" id="icon" alt="User Icon" />
        </div>
            <!-- Login Form -->
            <form>
                <input type="email" class="fadeIn second form-control" v-model="email" placeholder="Enter email" :class="{ 'is-invalid': $v.email.$error }">
                <div class="invalid-feedback">
                    <label v-if="!$v.email.required" class="form-text error">Field is required</label>
                    <label v-if="!$v.email.email" class="form-text error">Email is not valid.</label>
                </div>
                <input type="password" class="fadeIn third form-control" v-model="password" placeholder="Enter password" :class="{ 'is-invalid': $v.password.$error }">
                <div class="invalid-feedback">
                    <label v-if="!$v.password.required" class="form-text error">Field is required</label>
                    <label v-if="!$v.password.minLength" class="form-text error">Password must have at least {{$v.password.$params.minLength.min}} letters.</label>
                </div>
                <input type="text" class="fadeIn third form-control" v-model="name" placeholder="Enter name" :class="{ 'is-invalid': $v.name.$error }">
                <div class="invalid-feedback">
                    <label v-if="!$v.name.required" class="form-text error">Field is required</label>
                </div>
                <input type="text" class="fadeIn third form-control" v-model="address" placeholder="Enter address" :class="{ 'is-invalid': $v.address.$error }">
                <div class="invalid-feedback">
                    <label v-if="!$v.address.required" class="form-text error">Field is required</label>
                </div>
                <input type="submit" @click.prevent="register()" class="fadeIn fourth" value="Register">
            </form>
            <!-- Remind Passowrd -->
            <div id="formFooter">
                <router-link :to="{ name: 'login' }">&lt;&lt; Login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as fb from '@/firebaseConfig.js';
    import '@assets/styles/login.css';
    import { required, minLength, email } from 'vuelidate/lib/validators';

    export default {
        data: function () {
            return {
                email: '',
                password: '',
                name: '',
                address: '',
            }
        },
        validations: {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(6),
            },
            name: {
                required,
            },
            address: {
                required,
            }
        },
        methods: {
            ...mapActions('user', ['setCurrentUser', 'setUserProfile']),
            ...mapActions(['setLoading']),
            register: function() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.setLoading(true);
                    fb.auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
                        this.setCurrentUser(user.user);
                        fb.usersCollection.doc(user.user.uid).set({
                            name: this.name,
                            address: this.address,
                        }).then(() => {
                            this.setUserProfile();
                        }).then(() => {
                            this.setLoading(false);
                            this.$router.push({ name: 'list-todo' });
                        });
                    }).catch(error => {
                        this.setLoading(false);
                        window.console.log(error);
                    })
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
