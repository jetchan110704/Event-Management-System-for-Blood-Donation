<template>
  <header class="nav">
    <div class="brand">Life Line</div>
    <nav :class="['links', { show: open }]">
      <NuxtLink to="/" class="link" active-class="active" exact>Home</NuxtLink>
      <NuxtLink to="/about" class="link" active-class="active">About</NuxtLink>
      <NuxtLink to="/services" class="link" active-class="active">Services</NuxtLink>
      <NuxtLink to="/contact" class="link" active-class="active">Contact</NuxtLink>
    </nav>
    <button class="burger" @click="toggle" aria-label="Toggle navigation">
      <span :class="{ open: open }"></span>
    </button>
  </header>
</template>

<script setup>
import './navbar.css'

// We define the logic directly here instead of importing it
const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>