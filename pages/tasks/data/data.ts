import { h } from 'vue'

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
]

export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: h("span", { class: "i-radix-icons-question-mark-circled" }),
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: h("span", { class: "iconify i-radix-icons-circle", }),
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: h("span", { class: "iconify i-radix-icons-stopwatch", }),
  },
  {
    value: 'done',
    label: 'Done',
    icon: h("span", { class: "iconify i-radix-icons-check-circled", }),
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: h("span", { class: "iconify i-radix-icons-cross-circled", }),
  },
]

export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: h("span", { class: "iconify i-material-symbols-arrow-downward", }),
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: h("span", { class: "iconify i-material-symbols-arrow-right-alt", }),
  },
  {
    label: 'High',
    value: 'high',
    icon: h("span", { class: "iconify i-material-symbols-arrow-upward", }),
  },
]
