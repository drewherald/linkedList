import Node from "./Node"

export default class LinkedList{
    constructor(){
        this.listStart = null
    }

    append(value){
        if(this.listStart==null){
            new Node(value) == this.listStart
        } else{
            let check = this.listStart
            while(check.nextNode!=null){
                check = check.nextNode
            }
            check.nextNode = new Node(value)
        }
    }

    prepend(value){
        if(this.listStart==null){
            new Node(value) == this.listStart
        }else{
            temp = new Node(value)
           temp.nextNode = this.listStart
           this.listStart = temp
        }
    }

    size(){
        if(this.listStart==null){
            return 0;
        }

        let check = this.listStart
        let count = 0;
        while(check.nextNode!=null){
            check = check.nextNode
            count++
        }
        return count;
    }

    head(){
        return this.listStart;
    }

    tail(){
        let check = this.listStart
        while(check.nextNode!=null){
            check = check.nextNode
        }
        return check;
    }

    at(index){
        let check = this.listStart
        for(let i=0; i < index; i++){
            check = check.nextNode
            if(check==null){
                return("error, no node found at this index")
            }
        }
        return check;
    }

    pop(){
        let check = this.listStart
        let remover = null
        while(check.nextNode!=null){
            check = check.nextNode
            remover = check;
        }

        remover.nextNode = null;
    }

    contains(value){
        let check = this.listStart
        while(check.nextNode!=null){
            if(check.value===value){
                return true;
            }
            check = check.nextNode
        }
        return false;
    }

    find(value){
        let check = this.listStart
        let count = 0;
        while(check.nextNode!=null){
            if(check.value===value){
                return count;
            }
            check = check.nextNode
            count++
        }

        return "value not found!"
    }

    toString(){
        if(this.listStart==null){
            return "null"
        } else{
            let check = this.listStart
            let print = ""
            while(check.nextNode!=null){
                print += `(${check.value}) -> `
                check = check.nextNode
            }
            print += "null"
            return print;
        }
    }
}
