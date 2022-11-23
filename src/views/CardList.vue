<template>
	<div class="container">
		<EventCard v-for= "trade in tradehouse.list" :key="trade.tradeNo" :event="trade">
        </EventCard>
	</div>
</template>

<script>

import { mapState } from "vuex";
const houseStore = "houseStore";
import EventCard from "@/components/apt/AptTradeCard.vue";

export default {
	name: "CardList",
	components: {
        EventCard
	},
    computed:{
        ...mapState(houseStore, ["tradehouse"]),
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
	justify-content: left;
}


</style>