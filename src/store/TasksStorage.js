const state = {
    tasks: localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [],
    taskId: localStorage.getItem('taskId') !== null ? JSON.parse(localStorage.getItem('taskId')) : 1,
    isSomeCompleted: localStorage.getItem('isSomeCompleted') !== null ? JSON.parse(localStorage.getItem('isSomeCompleted')) : false
};

const getters = {
    tasks: state => state.tasks,
    isSomeCompleted: state => state.isSomeCompleted
};

const mutations = {
    setTasks: (state, payload) => {
        state.tasks = payload;
        localStorage.setItem("tasks", JSON.stringify(payload));
    },

    addTask: (state, taskContent) => {
        const newTask = {
            isCompleted: false,
            id: state.taskId,
            taskContent
        };
        state.tasks = [...state.tasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
        state.taskId += 1;
        localStorage.setItem('taskId', state.taskId);
    },

    completeTask: (state, id) => {
        const index = state.tasks.findIndex(item => item.id === id);
        const taskItem = state.tasks[index];
        state.tasks = [...state.tasks.slice(0, index), {...taskItem, isCompleted: true}, ...state.tasks.slice(index + 1)];
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    isThereCompletedTasks: (state) => {
        const isSomeCompleted = state.tasks.some(task => task.isCompleted);
        state.isSomeCompleted = isSomeCompleted;
        localStorage.setItem('isSomeCompleted', isSomeCompleted);
    },

    removeCompletedTasks: (state) => {
        state.tasks = state.tasks.filter(task => !task.isCompleted);
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
};

const actions = {
    setTasks: (context, payload) => {
        context.commit('setTasks', payload);
    },
    addTask: (context, taskContent) => {
        context.commit('addTask', taskContent);
    },
    completeTask: (context, id) => {
        context.commit('completeTask', id);
    },
    isThereCompletedTasks: (context) => {
        context.commit('isThereCompletedTasks');
    },
    removeCompletedTasks: (context) => {
        context.commit('removeCompletedTasks');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};