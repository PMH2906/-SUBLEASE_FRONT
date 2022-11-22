<template>
  <header>
    <nav class="header-nav">
      <b-row class="text-center">
        <b-col class="sm-3" />
        <b-col class="sm-3" />
        <b-col class="sm-3" />
        <b-col class="sm-3" />
        <b-col class="sm-3" />
         <b-col>
          <router-link class="bar-item" to="/login" v-if="!userInfo"
            >LOGIN</router-link
          >
          <div v-else>
            <span>{{ userInfo.userName }}님</span>
            <span class="bar-item" @click="logout">LOGOUT</span>
          </div>
        </b-col>
      </b-row>
    </nav>
  </header>
</template>

<script>

</script>

<style scoped>
* {
  color: #242d54;
}

.header-nav {
  margin-left: 50px;
  padding: 7px 0;
  box-shadow: 0px 4px 5px grey;
  background-color: white;
  height: 43px;
}
.bar-item {
  /* cursor: pointer; */
  text-decoration: none;
}
.custom-select{
  /* border-radius: 20px;
  width: fit-content;
  padding: 0 10px; */
  border: none;
  
}
/* .bar-item :hover{
  color: #311906;
} */
.login{
   color: black;
}
.btn {
  border: none;
  color: #242d54;
}
.btn.btn-outline-light{
  padding: 0;
}
button:hover{
  /* color: #311906; */
  font-weight: bold;
  background-color: transparent;
  /* transform: scale(1.2); */
}
.bar-item, a{
  text-decoration: none;
}
.bar-item:hover, a:hover{
  /* transform: scale(1.2); */
  color: #242d54;
  cursor: pointer;
  font-weight: bold;
}
.btn.filter{
  padding: 0 7px;
}
.name{
  font-weight: bolder;
}
</style>
