<script>
import MForm from './components/MForm.vue'

export default {
  components: { MForm },

  data() {
    return {
      skeleton: {
        top: ['s4', 's8'],
        top2: ['s2', 's4', 's1', 's2', 's3'],
        middle: ['s2', 's4', 's1', 's2', 's3'],
        midlee2: ['s2', 's4', 's1', 's2', 's3'],
        bottom1: ['s2', 's4', 's1', 's2', 's3'],
        bottom2: ['s2', 's4', 's1', 's2', 's3'],
      },
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
