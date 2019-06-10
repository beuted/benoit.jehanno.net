<template>
  <div>
    <div v-masonry transition-duration="0.3s" item-selector=".brick">
      <div v-masonry-tile class="brick" v-for="project in projects" :key="project.title">
        <a :href="project.github || project.demo" target="_blank">
          <div class="brick-image" :style="{ backgroundImage: 'url(\'/projects/' + project.image + '\')' }">
          </div>
          <div class="brick-title-container" :style="{ height: project.height + 'px' }">
            <div class="brick-title">
            <h2>{{project.title}}</h2>
            <h3>{{project.date}}</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProjectSection extends Vue {
  @Prop() public projects!: { title: string, github: string, demo: string, image: string, height: number, date: string } [];

  public mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.brick {
    position: relative;
    overflow: hidden;
    width: 370px;
    min-height: 300px;
    padding: 0;
}

.brick .brick-image {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    transition: all 1.5s;
    transform: scale(1, 1);
    filter: brightness(1)
}

.brick:hover .brick-image {
    transform: scale(1.05, 1.05);
    filter: brightness(0.25)
}

.brick .brick-title-container {
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color:rgba(0, 0, 0, 0);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.brick .brick-title {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 100%;
    height: 100%;
    color: white;
    text-shadow: 0px 0px 12px #000;
    opacity: 0;
    letter-spacing: 1px;

    transition: opacity 1s ease-in-out;
    transition: letter-spacing 1.5s ease-in-out;
}

.brick:hover .brick-title {
    opacity: 1;
    letter-spacing: 3px;
}
</style>
