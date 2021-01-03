<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
	#app{
		width: 70%;
		margin: 0 auto;
    max-width:1260px;
	}
	@media(max-width:1024px) {
		#app{
			width:90%;
		}
	}
	@media(max-width:768px) {
		#app{
			width:98%;
		}
	}
	@media(max-width:414px) {
		#app{
      width:100%;
    }
	}
</style>
