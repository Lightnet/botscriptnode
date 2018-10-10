

export class BotCMDs{
    //io = null;
    constructor(_io){
        this.io = _io;
        console.log('init botcmd');

        let pattern = this.pattern = [];
        pattern.push({pattern:"hello",response:"hi"});
        pattern.push({pattern:"test",response:"test 1"});

        return this;
    }

    parsemessage(_client,_text,cb){
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