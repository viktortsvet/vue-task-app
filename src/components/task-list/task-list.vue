<template>
    <ul class="taskList">
        <task-item :key="task.id" v-for="task in taskList"
        :task="task"
        >
        </task-item>
    </ul>
</template>

<script>
import TaskItem from '../task-item/task-item.vue';

export default {

    components: {
        TaskItem
    },

    name: 'task-list',

    props: {
        taskList: Array
    }
}
</script>

<style>
    .taskList {
        display: grid;
        grid-template: minmax(50px, auto) / 100%;
        grid-auto-rows: minmax(50px, auto);
        row-gap: 10px;
        margin-top: 15px;
    }
</style>