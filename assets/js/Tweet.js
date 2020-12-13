const Tweet = Vue.component('tweet', {
    props: ['message', 'author', 'item', 'city', 'place'],
    template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ item }}</p><p>{{ city }}</p><p>{{ message }}</p></div>'
   });