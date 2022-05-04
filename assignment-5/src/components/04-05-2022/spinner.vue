<template>
<div>
  <h3>button Spinner example</h3>
  <button class="btn btn-info" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-warning" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...
</button>
<div class="spinner-border text-primary" role="status"><br>
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status"><br>
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status"><br>
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>
</template>
<script>
export default {
    name:"SpiN",
    data(){
         return {

                 }
    }

}
</script>
<style>
</style>