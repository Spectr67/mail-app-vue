<script>
import MForm from './components/MForm.vue'

export default {
  components: { MForm },

  data() {
    return {
      skeleton: [
        ['s4', 's8'],
        ['s6', 's6'],
      ],
    }
  },
}
</script>

<template>
  <div>
    <section>
      <article>
        <MForm :skeleton="skeleton" />
      </article>
    </section>
  </div>
</template>
