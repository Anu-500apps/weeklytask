<template>
  <div>
    <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
    <b-card no-body>
    <b-tabs card>
      <b-tab no-body title="Element 1">
        <b-card-img bottom src="https://i.pinimg.com/736x/d4/88/f8/d488f853cac87fa83a8ae19f9ba4f7aa.jpg" alt="Image 21"></b-card-img>
        <b-card-footer>Picture 1 footer</b-card-footer>
      </b-tab>
      <b-tab no-body title="Element 2">
        <b-card-img bottom src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHglWzy37LIS4hurakyuAnW2O0GdZLC6m4w&usqp=CAU" alt="Image 25"></b-card-img>
        <b-card-footer>Picture 2 footer</b-card-footer>
      </b-tab>
      <b-tab no-body title="Element 3">
        <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
        <b-card-footer>Picture 3 footer</b-card-footer>
      </b-tab>
      <b-tab title="Text">
        <b-card-title>This tab does not have the <code>no-body</code> prop set</b-card-title>
        <b-card-text>
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
          consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
          consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
          veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
          esse irure.
        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
  </div>
</template>
<script>
export default {
    name:"SideBar",
    data() {
        return{}
        
    },
}
</script>
