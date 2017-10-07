Vue.component('message', {
  props: ["title", "body"],

  data() {
    return {
      isVisable : true
    }
  },

  template:

  `
    <article class="message is-dark" v-show="isVisable">
      <div class="message-header">
        <p>{{ title }}</p>
        <button class="delete" aria-label="delete" @click="hiddenModel"></button>
      </div>
      <div class="message-body">
          {{ body }}
      </div>
    </article>

  `,

  methods: {
    hiddenModel(){
      this.isVisable = false
    }
  }
});

new Vue({

  el: '#root'

});
