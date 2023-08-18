import Node from "./Node"

export default class LinkedList{
    constructor(){
        this.listStart = null
    }

    append(value){
        if(this.listStart==null){
            value == this.listStart
        } else{
            let check = this.listStart
            while(check.nextNode!=null){
                check = check.nextNode
            }
        }
    }
}

