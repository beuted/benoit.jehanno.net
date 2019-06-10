<template>
  <div class="text-carousel">
    <span v-for="(word, index) in words" :key="word">
        <span v-if="index == shownIndex">{{word}}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TextCarousel extends Vue {
  @Prop() public words!: string[];
  @Prop() public period!: number;

  public shownIndex: number = 0;

  public mounted() {
    this.ChooseRandomIndex();
  }

  ChooseRandomIndex(): void {
    this.shownIndex = Math.floor(Math.random() * Math.floor(this.words.length));

    setTimeout(() => {
      this.ChooseRandomIndex();
    }, this.period);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-carousel {
  display: inline;
}
</style>
