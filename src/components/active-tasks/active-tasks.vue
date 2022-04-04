<template>
    <div>
        <span class="textHeader">Активные задачи: {{activeTasks.length}}</span>
        <task-list
        :taskList="activeTasks"
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

    name: 'active-tasks',

    computed: {
        activeTasks() {
            return this.$store.getters.tasks.filter(task => !task.isCompleted);
        }
    }
}

</script>

<style>

</style>