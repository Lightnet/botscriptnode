

export class BotCMDs{
    //io = null;
    constructor(param){
        //console.log(param);
        this.io = param['io'];
        this.gun = param['gun'];
        console.log('init botcmd');
        //console.log(this.io);
        //console.log(this.gun);

        let pattern = this.pattern = [];
        //pattern.push({pattern:"hello",response:"hi"});
        //pattern.push({pattern:"test",response:"test 1"});
        //this.inittext();
        return this;
    }

    init(){
        let chatpattern = this.gun.get("chatpattern");
        chatpattern.map().once((data,key)=>{
            console.log(data);
            if(data !=null){
                this.pattern.push({pattern:data['pattern'],response:data['response'],command:data['command']});
            }
        });
    }

    inittext(){
        console.log("init text");
        //console.log(this.gun);
        let chatpattern = this.gun.get("chatpattern");
        //chatpattern.map().once((data,key)=>{
            //console.log(data);
        //});
    }

    parsemessage(_client,_text,cb){
        this.inittext();
        //this.io
        console.log(_text);
        //this.io.emit('chat message','test');
        let bfound = false;
        let text = "";
        for (let i =0; i < this.pattern.length;i++){
            console.log(this.pattern[i]);
            if(this.pattern[i].pattern == _text){
                bfound = true;
                text = this.pattern[i].response;
                break;
            }
        }
        
        if(bfound){
            cb(text);
        }else{
            cb('error');
        }
        
    }

    /*
    parsecmds(_client,_text,cb){
        //this.io
        console.log(_text);
        //this.io.emit('chat message','test');
        let bfound = false;
        let text = "";
        for (let i =0; i < this.pattern.length;i++){
            console.log(this.pattern[i]);
            if(this.pattern[i].pattern == _text){
                bfound = true;
                text = this.pattern[i].response;
                break;
            }
        }
        if(bfound){
            cb(text);
        }else{
            cb('error');
        }   
    }
    */
    
}