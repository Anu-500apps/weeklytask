<template>
  <div>
     <b-alert show dismissible fade variant="warning">Dismissible Alert!</b-alert> 
    <b-alert variant="warning" dismissible fade :show="showDismissibleAlert" @dismissed="showDismissibleAlert = false">
      Dismissible Alert!
    </b-alert>
    <b-alert :show="dismissCountDown" dismissible fade variant="warning" @dismiss-count-down="countDownChanged" >
      This alert will dismiss after {{ dismissCountDown }} seconds...
    </b-alert>
    <b-button @click="showAlert" variant="warning" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert = true" variant="warning" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? "visible" : "hidden" }})
    </b-button>
    <label for="tags-basic">Type a new tag and press enter</label>
    <b-form-tags input-id="tags-basic" v-model="value"></b-form-tags>
    <p class="mt-2">Value: {{ value }}</p>
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
    <!-- Plain mode -->
    <!-- <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div> -->
    <b-form-rating v-model="value1"></b-form-rating>
    <p>Value: {{ value1 }}</p>
   <label for="demo-sb">Spin Button</label>
    <b-form-spinbutton id="demo-sb" v-model="value2" min="1" max="100"></b-form-spinbutton>
    <p>Value: {{ value2 }}</p>
  </div>
</template>

<script>
export default {
    name:"BalerT",
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      value:"",
      file1:null,
      file2:null,
      value1:"",
     value2:""

    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
