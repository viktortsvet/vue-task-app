<template>
    <div>
        <span class="textHeader">Выполненные задачи: {{completedTasks.length}}</span>
        <task-list
        :taskList="completedTasks"
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

    name: 'completed-tasks',

    computed: {
        completedTasks() {
            return this.$store.getters.tasks.filter(task => task.isCompleted);
        }
    }
}
</script>

<style>

</style>