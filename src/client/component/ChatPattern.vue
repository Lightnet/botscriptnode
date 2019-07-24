<template>
    <div>
        <button v-on:click="togglepattern">Table Patterns</button>

        <div v-if="bshowpatterns" id="chatpatterntable">
            <table>
                <tbody>
                    <tr>
                        <td>
                            ID HASH
                        </td>
                        <td>
                            Pattern
                        </td>
                        <td>
                            Respond
                        </td>
                        <td>
                            commad
                        </td>
                        <td>
                            Actions
                        </td>
                    </tr>

                    <tr v-for="item in patterns" v-bind:key="item.id" v-bind:id="item.id">
                        <td>
                            <input v-model="item.id" disabled/>
                        </td>
                        <td>
                            <input v-model="item.pattern" />
                        </td>
                        <td>
                            <input  v-model="item.response"/>
                        </td>
                        <td>
                            <input  v-model="item.command"/>
                        </td>
                        <td>
                            <button v-on:click="pattern_update(item.id)">Update</button>
                            <button v-on:click="pattern_delete(item.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <label>Pattern:</label>
            <input  v-model="textpattern"/>
            <br>
            <label>Reponse:</label>
            <input  v-model="textresponse"/>
            <br>
            <label>Command:</label>
            <input  v-model="textcommand"/>
            <br>
            <button v-on:click="pattern_add()">Add</button>
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
        },
        updatelist(){
            let gun = this.$gun;
            let chatpattern = gun.get("chatpattern");
            chatpattern.map().once((data,key)=>{
                //console.log(data);
                //console.log(key);
                if(data == null){
                    return;
                }
                this.patterns.push({id:key,pattern:data.pattern,response:data.response,command:data.command})
            });
        },
        pattern_update(event){
            console.log(event);
            let element = document.getElementById(event);
            //console.log(element);
            //console.log(element.children[0].children[0].value);
            //console.log(element.children[1].children[0].value);
            //console.log(element.children[2].children[0].value);
            let gun = this.$gun;
            let chatpattern = gun.get("chatpattern");
            let id = event || "";
            if (!id)
                return;
            chatpattern.get(id).put({
                pattern:element.children[1].children[0].value,
                response:element.children[2].children[0].value,
                command:element.children[3].children[0].value
                                    },(ack)=>{
                console.log(ack);

            });;
        },
        pattern_delete(event){
            console.log(event);
            let id = event || "";
            if (!id)
                return;
            let gun = this.$gun;
            let chatpattern = gun.get("chatpattern");
            chatpattern.get(id).put(null);

            for(var i in this.patterns){
                if(this.patterns[i].id == id){
                    this.patterns.splice(i, 1);
                    break;
                }
                //console.log(i);
            }
        },
        pattern_add(event){
            console.log(this.$gun);
            console.log(this.textpattern);
            console.log(this.textreponse);
            console.log(this.textcommand);

            let gun = this.$gun;
            let chatpattern = gun.get("chatpattern");

            chatpattern.set({
                                pattern:this.textpattern || "",
                                response:this.textresponse || "",
                                command:this.textcommand || "",
                            });

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