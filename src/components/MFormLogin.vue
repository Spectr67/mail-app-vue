<script>
export default {
  emits: ['close'],
}
</script>

<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="modal-footer">
        <a
          href="#!"
          @click="$emit('close')"
          class="waves-effect waves-red btn-flat"
          >Cancel</a
        >
        <a href="#!" class="waves-effect waves-green btn-flat">Submit</a>
      </div>
    </form>
  </div>
</template>
