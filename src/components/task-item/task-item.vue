<template>
    <li v-bind:style="{border: 1 + 'px', 
        borderStyle: 'solid',
        borderRadius: 6 + 'px',
        borderColor: borderColor 
    }" class="task" @click="completeTask(task.id)">
        {{task.taskContent}}
    </li>
</template>

<script>

export default {
    name: 'task-item',

    props: {
        task: Object
    },

    data() {
        return {
            borderColor: 'gray'
        }
    },

    mounted() {
        if (this.task.isCompleted) {
            this.borderColor = '#0DFF00';
        }
    },

    methods: {
        completeTask(id) {
            this.$store.dispatch('completeTask', id);
            this.$store.dispatch('isThereCompletedTasks');
            this.borderColor = '#0DFF00';
        }
    }
}

</script>

<style>
    .task {
        display: block;
        width: 100%;
        padding: 10px;
    }
</style>