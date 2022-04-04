<template>
    <div>
        <span class="textHeader">Задачи: {{allTasks.length}}</span>
        <task-list
        :taskList="allTasks"
        >

        </task-list>
    </div>
</template>

<script>
import TaskList from '../task-list/task-list.vue';
export default {
    components: {
        TaskList
    },

    name: 'all-tasks',

    computed: {
        allTasks() {
            return this.$store.getters.tasks;
        }
    }
}
</script>

<style>

</style>