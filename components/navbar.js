import { ref } from 'vue'

export const open = ref(false)

export function toggle() {
  open.value = !open.value
}
