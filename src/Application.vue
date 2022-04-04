<template>
    <div class="container">
        <div>
            <span class="textHeader">Введите новую задачу:</span>
            <input class="input-task" @keyup.enter="addTask(inputValue)" v-model="inputValue" type="text">
            <div class="btns">
                <button class="button addBtn" @click="addTask(inputValue)">Добавить</button>
                <button class="button removeBtn" v-show="$store.getters.isSomeCompleted" @click="removeCompletedTasks">
                    Удалить выполненные
                </button>
            </div>
        </div>

        <div class="links">
            <router-link tag="button" class="button link" to="/">Все задачи</router-link>
            <router-link tag="button" class="button link" to="/activeTasks">Активные</router-link>
            <router-link tag="button" class="button link" to="/completedTasks">Выполненные</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {

    name: 'Application',

    data() {
        return {
            inputValue: ''
        }
    },

    mounted() {
        this.isSomeCompletedTask();
    },

    methods: {
        addTask(taskContent) {
            if (taskContent.trim().length !== 0) {
                this.$store.dispatch('addTask', taskContent);
            }
            this.inputValue = '';
            this.isSomeCompletedTask();
        },

        removeCompletedTasks() {
            this.$store.dispatch('removeCompletedTasks');
            this.isSomeCompletedTask();
        },

        isSomeCompletedTask() {
            this.$store.dispatch('isThereCompletedTasks');
        }
    }
}

</script>

<style>

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .textHeader {
        display: block;
        text-align: center;
        margin-top: 15px;
    }

    .container {
        width: 50%;
        display: block;
        margin: 0 auto;
    }

    .button {
        display: block;
        width: 100%;
        height: 100%;
        transition: 0.5s all;
        background-color: inherit;
        cursor: pointer;
        border: 1px solid gray;
        border-radius: 6px;
    }

    .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
    }

    .addBtn:hover {
        background-color: #56FF23;
    }

    .link {
        width: 150px;
        height: 30px;
        transition: 0.5s all;
        background-color: inherit;
        cursor: pointer;
        border: 1px solid gray;
        border-radius: 6px;
    }

    .link:hover {
        background-color: cornflowerblue;
    }

    .removeBtn:hover {
        background-color: #FF1E34;
    }

    .btns {
        display: grid;
        grid-template: 30px / repeat(2, minmax(170px, auto));
        justify-content: space-between;
        grid-auto-columns: minmax(170px, auto);
    }

    .input-task {
        display: block;
        width: 50%;
        margin: 0 auto;
        margin-top: 15px;
        padding: 10px;
        border-radius:10px;
        border: 1px solid #eee;
        transition: .3s border-color;
    }
    .input-task:hover {
        border: 1px solid #aaa;
    }
</style>