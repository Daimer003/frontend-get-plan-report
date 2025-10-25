// store/report.js
import { defineStore } from 'pinia'

export const useReportStore = defineStore('report', {
  state: () => ({
    summary: null,
    consensus: [],
    strengths: [],
    opportunities: [],
  }),
  actions: {
    async fetchReport() {
      const data = await fetch('/api/report').then(res => res.json())
      this.summary = data.summary
      this.consensus = data.consensus
      this.strengths = data.strengths
      this.opportunities = data.opportunities
    },
  },
})