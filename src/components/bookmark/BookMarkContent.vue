<template>
<div class="bookmark">
    <div class="heroImg">
        <img class="first-img" src="@/assets/room1.jpg">
        <img class="second-img" src="@/assets/room1.jpg">
    </div>
    <div class="content">
        <div class="content-left">
            <div class="content-left-title">가격 정보</div>
            <b-table stacked :items="items"></b-table>
        </div>
        <div class="content-right">
            <div class="content-right-content">
                <div class="rentfee">월세 1000/95</div>
                <div class="sub-content">
                    <div>
                    <div>오피스텔(복층)</div>
                    <div>31평</div>
                    </div>
                    <div>
                    <div>10층</div>
                    <div>12만원</div>
                    </div>
                </div>
                <div class="location"><span id="location-title">위치</span> <div>서울시 강남구 역삼동</div></div>
            </div>
            <div class="btn">
                <button>예약하기</button><button>하트</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
data() {
      return {
        items: [
          { "보증금" : 1000 ,"월세": 40, "관리비": 'Dickerson' },
        ]
      }
    }
}
</script>

<style scoped>
.heroImg{
    display:flex;
    justify-content: center;
    margin:0 40px;
}
.first-img{
    width:40%;
}
.second-img{
    width:40%;
}
.content{
    display:flex;
    margin:0 40px;
}
.content-left{
    width:70%;
    height:400px;
    margin:40px;
}
.content-left-title{
    font-weight: bold;
    font-size: 20px;
}
.content-right{
    width:30%;
    height:400px;
    margin: 40px;
    border: 1px solid;
    box-shadow: 0px 1px black;
}

.rentfee{
    font-weight: bold;
    font-size: 20px;
    margin: 20px 0;
    padding-left:20px;
}
.sub-content{
    display:flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 20px;
}
.sub-content > div{
    width:100%;
}
.btn{
    width:100%;
}
.location{
    display:flex;
    justify-content: center;
    margin-bottom: 20px;
}
#location-title{
    width:20%;
    font-weight: bold;
}

</style>