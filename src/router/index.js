import Vue from 'vue'
import VueRouter from 'vue-router';

import ActiveTasks from '../components/active-tasks/active-tasks';
import CompletedTasks from '../components/completed-tasks/completed-tasks';
import AllTasks from '../components/all-tasks/all-tasks';

Vue.use(VueRouter);

const routes = [
  {
    path: '/activeTasks',
    component: ActiveTasks
  },
  {
    path: '/completedTasks',
    component: CompletedTasks
  },

  {
    path: '/',
    component: AllTasks
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
