import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ReportLayout from '../layouts/ReportLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Layout principal del sitio
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: import('@/pages/index.vue'),
          meta: {
            title: 'Inicio | Get-Plan',
            description: 'Resumen general del proyecto y reportes disponibles.',
          },
        },
      ],
    },

    // Layout para reportes
    {
      path: '/report',
      component: ReportLayout,
      meta: {
        requiresAuth: false,
        layout: 'report',
      },
      children: [
        {
          path: '',
          name: 'report.index',
          component: import('@/pages/report/index.vue'),
          meta: { title: 'Reportes | Get-Plan' },
        },
        {
          path: 'summary',
          name: 'report.summary',
          component: import('@/pages/report/summary.vue'),
          meta: { title: 'Resumen Ejecutivo | Get-Plan' },
        },
        {
          path: 'consensus',
          name: 'report.consensus',
          component: import('@/pages/report/consensus.vue'),
          meta: { title: 'Consenso de Voces | Get-Plan' },
        },
        {
          path: 'insights',
          name: 'report.insights',
          component: import('@/pages/report/insights.vue'),
          meta: { title: 'Fortalezas y Brechas | Get-Plan' },
        },
        {
          path: 'strengths',
          name: 'report.strengths',
          component: import('@/pages/report/strengths.vue'),
          meta: { title: 'Oportunidades | Get-Plan' },
        },
      ],
    },

    // Redirección 404
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

// 🌐 Middleware global: título dinámico y scroll top
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
  next()
})

export default router