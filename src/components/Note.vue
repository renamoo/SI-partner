<template>
  <v-container>
    <v-flex>
     <vueSignature ref="signature" :sigOption="option"></vueSignature> 
        <v-btn small @click="save">Save</v-btn>
        <v-btn small @click="clear">Clear</v-btn>
        <v-btn small @click="undo">Undo</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'note',
  data () {
    return {
      option:{
                penColor:"rgb(0, 0, 0)",
                backgroundColor:"rgb(255,255,255)"
            }
    }
  },
   methods:{
        save(){
            var _this = this;
            var png = _this.$refs.signature.save()
            var jpeg = _this.$refs.signature.save('image/jpeg')
            var svg = _this.$refs.signature.save('image/svg+xml');
            console.log(png);
            console.log(jpeg)
            console.log(svg)
        },
        clear(){
            var _this = this;
            _this.$refs.signature.clear();
        },
        undo(){
            var _this = this;
            _this.$refs.signature.undo();
        },
        fromDataURL(url){
            var _this = this;
            _this.$refs.signature.fromDataURL("data:image/png;base64,iVBORw0K...");
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>