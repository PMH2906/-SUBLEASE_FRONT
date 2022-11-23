<template>
	<div class="container">
		<EventCard />
	</div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/apt/AptTradeCard.vue";
export default {
	name: "CardList",
	components: {
		EventCard
	},
	created() {
		
	},
	methods: {
	}
};
</script>

<style scoped>
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20;
    margin-bottom: 12px;
}

button {
  background: #42b983;
  border: 1px solid #42b983;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  margin-right: 5px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

button:hover,
button:active {
  background-color: initial;
  background-position: 0 0;
  color: #42b983;
}

button:active {
  opacity: .5;
}

</style>