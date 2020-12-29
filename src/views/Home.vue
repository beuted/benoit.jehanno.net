<template>
  <div class="home">
    <div class="intro">
      <div class="intro-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="intro-message">
                <h1>benoit.jehanno.net</h1>
                <h3>I love <text-carousel :words="likedStuff" period="1000"></text-carousel></h3>
                <hr class="intro-divider">
                <ul class="list-inline intro-social-buttons">
                  <li>
                    <a href="https://twitter.com/DeKajoo" class="btn btn-secondary"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                  </li>
                  <li>
                    <a href="https://github.com/beuted" class="btn btn-secondary"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                  </li>
                  <li>
                    <a href="http://stackoverflow.com/users/2531058/dekajoo" class="btn btn-secondary"><i class="fa fa-stack-overflow fa-fw"></i> <span class="network-name">Stack Overflow</span></a>
                  </li>
                  <li>
                    <a href="https://dekajoo.itch.io/" class="btn btn-secondary"><i class="fa fa-gamepad" aria-hidden="true"></i> <span class="network-name"> Itch.io</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="projects" class="projects-section">
      <div class="container">
        <h1 class="section-title">My projects</h1>
        <project-section :projects="projects"></project-section>
      </div>
    </div>

    <div class="projects-section">
      <div class="container">
        <h1 class="section-title">Places I've seen and places I want to go</h1>
        <div class="row" style="overflow:hidden;">
          <iframe class="col-md-12" src="https://www.google.com/maps/d/embed?mid=1OoDcYOFAi67q8mXKStfTB9pJBYM" height="640" style="position:relative; top:-46px; border:none;"></iframe>
        </div>
      </div>
    </div>

    <div class="container">
      <footer>
        <p>© 2017 Benoit Jehanno</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextCarousel from '@/components/TextCarousel.vue';
import ProjectSection from '@/components/ProjectSection.vue';

@Component({
  components: {
    TextCarousel,
    ProjectSection
  },
})
export default class Home extends Vue {

  private likedStuff = [
    'Nethack', 'UnNethack', 'New Techs', 'Reddit', '🌽', '🍣', '🍺', 'ES6', 'Typescript',
    'Nodejs', 'C#', 'Java', 'Esport', 'Hiking', '🏔 Mountains',
    'Hackernews', 'Coding games', 'Coding small projects', '🕹 Indie games',
    'All sorts of musics', '🎲 Board games'
  ];

  public projects = [
     {
        title: 'JS RPG',
        github: 'https://github.com/beuted/JS-RPG',
        demo: 'https://js-rpg.herokuapp.com/index.html',
        image: 'js-rpg.PNG',
        height: 300,
        date: '2011'
     },
     {
        title: 'WEBGL FPS',
        github: 'https://github.com/beuted/WebGL-FPS',
        demo: 'https://webgl-fps.herokuapp.com/src/index.html',
        image: 'webgl-fps.PNG',
        height: 300,
        date: '2012'
     },
     {
        title: 'csgo-mates.com',
        github: 'https://github.com/beuted/csgo-mates',
        image: 'csgo-mates.PNG',
        height: 300,
        date: '2013-2014'
     },
     {
        title: 'smoothycon',
        github: 'https://github.com/beuted/smoothycon',
        demo: 'https://smoothycon.herokuapp.com/demo.html',
        image: 'smoothycon.PNG',
        height: 300,
        date: 'March 2015'
     },
     {
        title: 'ng-chocolat',
        github: 'https://github.com/beuted/ng-chocolat',
        image: 'ng-chocolat.PNG',
        height: 300,
        date: 'September 2015'
     },
     {
        title: 'The deepest picture',
        github: 'https://github.com/beuted/TheDeepestPicture',
        demo: 'https://the-deepest-picture.herokuapp.com/',
        image: 'TheDeepestPicture.PNG',
        height: 300,
        date: '2016'
     },
     {
        title: 'Encryption playgrd',
        github: 'https://github.com/beuted/EncryptionPlayground',
        demo: 'https://encryption-playground.herokuapp.com',
        image: 'encryption-playground.PNG',
        height: 300,
        date: '2016'
     },
     {
        title: 'Crawletto',
        github: 'https://github.com/beuted/Crawletto',
        demo: 'https://crawletto.herokuapp.com/',
        image: 'crawletto.PNG',
        height: 300,
        date: '2016'
     },
     {
        title: 'Performance hunting',
        github: 'https://github.com/beuted/PerformanceHunting',
        image: 'performance-hunting.jpg',
        height: 300,
        date: '2016'
     },
     {
        title: 'benoit.jehanno.net',
        github: 'https://github.com/beuted/benoit.jehanno.net',
        image: 'benoit-jehanno-net.PNG',
        height: 300,
        date: '2017'
     },
     {
        title: 'typescript workshop',
        github: 'https://github.com/beuted/typescript-workshop',
        image: 'typescript-workshop.PNG',
        height: 300,
        date: '2017'
     }
   ];
}
</script>

<style lang="scss">
  .intro {
      display: table;
      width: 100%;
      height: auto;
      padding: 100px 0;
      margin-bottom: 120px;
      text-align: center;
      color: #F4F4F4;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, #F4F4F4 100%), url(../assets/background-intro.jpg) no-repeat bottom center scroll;
      background-color: black;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;
      -o-background-size: cover;
  }
  .intro .intro-header {
      height: 100%;
      display: table-cell;
      vertical-align: middle;
  }

  .intro-message > h1 {
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      font-size: 70px;
      font-weight: bold;
  }

  .intro-divider {
      width: 400px;
      border-top: 1px solid #F4F4F4;
      border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  .intro-message > h3 {
      text-shadow: 2px 2px 3px rgba(0,0,0,0.6);
      margin-top: 20px;
      margin-bottom: 10px;
  }

  .intro-social-buttons {
      margin-bottom: 80px;
  }

  .intro-scroll-button {
      font-size: 50px;
      color: #F4F4F4;
  }

  .btn-circle {
      width: 70px;
      height: 70px;
      margin-top: 15px;
      padding: 7px 16px;
      border: 2px solid #F4F4F4;
      border-radius: 100% !important;
      font-size: 40px;
      background: transparent;

      transition: background 0.3s ease-in-out;
  }
  .btn-circle:hover,
  .btn-circle:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.1);
  }

  .btn-circle > i {
      transition: transform 0.3s ease-in-out;
      transform: scale(1);
  }

  .btn-circle:hover > i,
  .btn-circle:focus > i {
      transform: scale(1.1);
  }

  @media(max-width:767px) {
      .intro-message {
          padding-bottom: 15%;
      }

      .intro-message > h1 {
          font-size: 3em;
      }

      ul.intro-social-buttons > li {
          display: block;
          margin-bottom: 20px;
          padding: 0;
      }

      ul.intro-social-buttons > li:last-child {
          margin-bottom: 0;
      }

      .intro-divider {
          width: 100%;
      }
  }

  .network-name {
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 2px;
  }

  .projects-section {
      background-color: #F4F4F4;
      margin-bottom: 120px;
  }

  .section-title {
      margin-bottom: 30px;
      font-family: 'Montserrat', sans-serif;
      text-align: center;
  }

  .list-inline {
    margin-left: -5px;
    padding-left: 0;
    list-style: none;
    >li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
    }
  }
</style>


