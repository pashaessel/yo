<template>
  <header>
    <div class="container">
      <div class="content">
        <a hreff="/" class="logo">yo-<span>dnd</span></a>
        <nav>
          <ul>
            <li v-for="link in links" :key="link.id">{{ link.title }}</li>
          </ul>
        </nav>
        <div class="authorize">
          <a href="" class="sign-in">Войти</a>
          <a href="" class="sign-up">Регистрация</a>
        </div>
      </div>
    </div>
  </header>
</template> 
<script setup>
import { ref, reactive } from "vue";
const links = reactive({
  campaigns: {
    title: "Кампании",
    href: "/campaigns",
    id: 1,
  },
  characters: {
    title: "Персонажи",
    href: "/characters",
    id: 2,
  },
});
</script>

<style scoped lang='scss' module>
header {
  padding: 1rem 1.5rem;
  height: 6.5rem;
  width: 100%;
  box-shadow: -8px -8px 20px 1px grey;
}
.content {
  height: 100%;
  display: flex;
  align-items: center;
}
.logo {
  margin: auto 0;
  font-size: 2.4rem;
  font-weight: bold;
  span {
    color: $purple;
  }
}

ul {
  margin-left: 5rem;
  display: flex;
  li {
    font-size: 1.8rem;
    margin-right: 4rem;
    font-weight: bold;
    &:hover {
    }
  }
}
</style>
