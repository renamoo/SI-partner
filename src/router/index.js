import Vue from 'vue'
import Router from 'vue-router'
import StopWatch from '@/components/StopWatch'
import Note from '@/components/Note'
import Vocab from '@/components/Vocab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components:{
        StopWatch: StopWatch,
        Note: Note,
        Vocab: Vocab
      }
    }
  ]
})
