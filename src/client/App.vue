<template>
    <div id="appname">
        <div>
            <a href="#">Home</a>
        </div>

        <!--
        <div class="container">
			<component :is="currentView" ></component>
		</div>
        -->
    </div>
</template>

<script>
import ChatBox from './component/ChatBox'

import ChatPattern from './component/ChatPattern'

export default {
    components: {
        'chatbox':ChatBox,
        //'chatpattern':ChatPattern
    },
    data() {
        return {
            currentView: 'chatbox',
        }
    }
}

</script>
<style>
.container{
    position: fixed;
	left: 0px;
	top: 0px;
    z-index: 9;
}

</style>