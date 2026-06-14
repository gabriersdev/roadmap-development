<template>
  <div class="roadmap-lists" v-if="data">
    <div v-if="'courses' in data">
      <h2 id="cursos" tabindex="-1">Cursos <a class="header-anchor" href="#cursos" aria-label="Permalink to &quot;Cursos&quot;">​</a></h2>
      <ul v-if="data.courses.length">
        <li v-for="(course, index) in data.courses" :key="'course-'+index">
          <a v-if="course.url" :href="course.url" target="_blank" rel="noopener noreferrer">{{ course.title }}</a>
          <span v-else>{{ course.title }}</span>
        </li>
      </ul>
    </div>

    <div v-if="'researchTopics' in data">
      <h2 id="topicos-para-pesquisa" tabindex="-1">Tópicos para pesquisa <a class="header-anchor" href="#topicos-para-pesquisa" aria-label="Permalink to &quot;Tópicos para pesquisa&quot;">​</a></h2>
      <ul v-if="data.researchTopics.length">
        <li v-for="(topic, index) in data.researchTopics" :key="'topic-'+index">
          {{ topic }}
        </li>
      </ul>
    </div>

    <div v-if="'todo' in data">
      <h2 id="para-fazer" tabindex="-1">Para fazer <a class="header-anchor" href="#para-fazer" aria-label="Permalink to &quot;Para fazer&quot;">​</a></h2>
      <ul v-if="data.todo.length">
        <li v-for="(item, index) in data.todo" :key="'todo-'+index">
          <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
          <span v-else>{{ item.title || item }}</span>
        </li>
      </ul>
    </div>

    <div v-if="'toRead' in data">
      <h2 id="para-ler" tabindex="-1">Para ler <a class="header-anchor" href="#para-ler" aria-label="Permalink to &quot;Para ler&quot;">​</a></h2>
      <ul v-if="data.toRead.length && data.toRead[0] !== '...'">
        <li v-for="(item, index) in data.toRead" :key="'read-'+index">
          <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
          <span v-else>{{ item.title || item }}</span>
        </li>
      </ul>
      <p v-else-if="data.toRead.length && data.toRead[0] === '...'">...</p>
    </div>
    
    <div v-if="'recommendations' in data">
      <h2 id="recomendacoes" tabindex="-1">Recomendações <a class="header-anchor" href="#recomendacoes" aria-label="Permalink to &quot;Recomendações&quot;">​</a></h2>
      <ul v-if="data.recommendations.length">
        <li v-for="(item, index) in data.recommendations" :key="'rec-'+index">
          <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
          <span v-else>{{ item.title || item }}</span>
        </li>
      </ul>
    </div>

    <div v-if="'projects' in data">
      <h2 id="projetos" tabindex="-1">Projetos <a class="header-anchor" href="#projetos" aria-label="Permalink to &quot;Projetos&quot;">​</a></h2>
      <ul v-if="data.projects.length && data.projects[0] !== '...'">
        <li v-for="(item, index) in data.projects" :key="'proj-'+index">
           <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
          <span v-else>{{ item.title || item }}</span>
        </li>
      </ul>
      <p v-else-if="data.projects.length && data.projects[0] === '...'">...</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { roadmapData } from '../../../data/roadmapData.js';

const props = defineProps({
  category: {
    type: String,
    required: true
  }
});

const data = computed(() => roadmapData[props.category]);
</script>
