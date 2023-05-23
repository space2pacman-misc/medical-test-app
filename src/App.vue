<template>
  <div id="app">
    <div class="navbar">
      <a :href="link.href" v-for="(link, index) in links" :key="index" class="navbar__link" >{{ link.name }}</a>
    </div>

    <div class="login">
      <input placeholder="Логин"/>
      <input placeholder="Пароль"/>
      <button @click="auth">Войти</button>
    </div>

    <input placeholder="Поиск..." v-model="searchUser" />

    <div class="users">
      <div v-for="user in usersFinded" :key="user.login_id">{{ user.login }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      users: [{"login_id":1344,"login":"Бахерт Ирина Викторовна","login_html":"Бахерт Ирина Викторовна"},{"login_id":896,"login":"Бойков Антон Валентинович","login_html":"Бойков Антон Валентинович"},{"login_id":240,"login":"Болотникова Светлана Ивановна","login_html":"Болотникова Светлана Ивановна"},{"login_id":602,"login":"Бородин Александр Вячеславович","login_html":"Бородин Александр Вячеславович"},{"login_id":1091,"login":"Борсак Алёна Ивановна","login_html":"Борсак Алёна Ивановна"},{"login_id":116,"login":"Борсак Иван Иванович","login_html":"Борсак Иван Иванович"},{"login_id":1331,"login":"Борсак Татьяна Павловна","login_html":"Борсак Татьяна Павловна"},{"login_id":1131,"login":"Елизарьева Наталья Викторовна","login_html":"Елизарьева Наталья Викторовна"},{"login_id":510,"login":"Заводник Аркадий Иосифович","login_html":"Заводник Аркадий Иосифович"},{"login_id":820,"login":"Казарян Сергей Сергеевич","login_html":"Казарян Сергей Сергеевич"},{"login_id":1413,"login":"Карпов Максим Игоревич","login_html":"Карпов Максим Игоревич"},{"login_id":267,"login":"Колосова Светлана Викторовна","login_html":"Колосова Светлана Викторовна"},{"login_id":790,"login":"Магаров Антон Павлович","login_html":"Магаров Антон Павлович"},{"login_id":862,"login":"Мацукатова Елена Михайловна","login_html":"Мацукатова Елена Михайловна"},{"login_id":46,"login":"Нохрина Любовь Сергеевна","login_html":"Нохрина Любовь Сергеевна"},{"login_id":368,"login":"Пахомов Иван Александрович","login_html":"Пахомов Иван Александрович"},{"login_id":1873,"login":"Петров Денис Анатольевич","login_html":"Петров Денис Анатольевич"},{"login_id":884,"login":"Пузаткин Дмитрий Алексеевич","login_html":"Пузаткин Дмитрий Алексеевич"},{"login_id":381,"login":"Синякин Павел Александрович","login_html":"Синякин Павел Александрович"},{"login_id":265,"login":"Тютенок Сергей Николаевич","login_html":"Тютенок Сергей Николаевич"},{"login_id":610,"login":"Цветков Андрей Николаевич","login_html":"Цветков Андрей Николаевич"},{"login_id":336,"login":"Шевелев Александр Викторович","login_html":"Шевелев Александр Викторович"},{"login_id":-2,"login":"admin","login_html":"admin"},{"login_id":-3,"login":"Call центр","login_html":"Call центр"},{"login_id":-1,"login":"user","login_html":"user"},{"login_id":-6,"login":"Доктор","login_html":"Доктор"},{"login_id":-5,"login":"ресепшен","login_html":"ресепшен"}],
      usersFinded: [],
      searchUser: '',
      links: [
        {
          name: 'Главная',
          href: '/home'
        },
        {
          name: 'Расписание',
          href: '/raspisanie'
        },
        {
          name: 'Приемы',
          href: '/priemi'
        }
      ]
    }
  },
  methods: {
    auth() {
      const response = this.request('localhost', 'POST', {
        login: this.login,
        password: this.password
      });

      if (response.status === 'success') {
        this.$store.commit('SET_SESSION_ID', response.data.session_id);
      }
    },
    request(address, method, data) {
      address, method, data // data.login, data.password
      //fetch(address);

      const payload = {
        status: "success",
        data: {
          session_id: "01234567"
        }
      }

      return payload;
    },
    requestSearch(address, method = 'GET', data) {
      address, method, data // data.login, data.password
      //fetch(address);

      // fix request to searchUser

      const payload = {
        status: "success",
        data: {
          users: this.users.filter(user => {
            if (user.login.includes(this.searchUser)) { // fix to RegExp
              return true;
            } else {
              return false;
            }
          })
        }
      }

      return payload;
    }
  },
  watch: {
    searchUser() {
      const response = this.requestSearch('localhost', );

      if (response.status === 'success') {
        this.usersFinded = response.data.users;
      }
    }
  }
}
</script>

<style>
.navbar {
  border: 1px solid;
  padding: 20px;
}

.navbar__link {
  background-color: green;
  padding: 20px;
}
</style>
