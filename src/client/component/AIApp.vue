<template>
    <div>
        <button v-on:click="togglepattern">App</button>

        <div v-if="bshowpatterns" id="chatpatterntable">
            <table>
                <tbody>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            
                        </td>
                    </tr>

                    <tr v-for="item in patterns" v-bind:key="item.id" v-bind:id="item.id">
                        <td>
                            <input v-model="item.id" disabled/>
                        </td>
                        <td>
                            <input v-model="item.pattern" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<script>

export default {
    data() {
        return {
            //currentView: 'access',
            bshowpatterns:false,
            textpattern:"",
            textresponse:"",
            textcommand:"",
            patterns:[]
        }
    },
    created(){
        //this.patterns.push({id:"0",pattern:"test",response:"",command:""})
        //this.patterns.push({id:"1",pattern:"test",response:"",command:""})
        this.updatelist();
    },
    methods:{
        togglepattern(){
            this.bshowpatterns = !this.bshowpatterns;
        }

    }
}

</script>
<style>

#chatpatterntable {
    background-color: lightblue;
    overflow: scroll;
    height:400px;
}
</style>