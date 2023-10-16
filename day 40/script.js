//Q1. Create a Linkedlist with insert, delete, search  and print operations
class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }
    add(element){
        var node=new Node(element);
        var current;
        if (this.head==null)this.head=node;
        else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }

    insertAt(element,index){
        if (index<0 || index>this.size)
          return console.log('please enter a valid index.');
          else{
            var node=new Node(element);
            var curr,prev;
            curr=this.head;
             if(index==0){
                node.next=this.head;
                var it=0;
                while (it<index){
                    it++;
                    prev=curr;
                    curr=curr.next;
                }
                node.next=curr;
                prev.next=node;
             }
             this.size++;
          }
    }
    removeForm(index){
        if(index<0||index>=this.size)
        return console.log('please enter a valid index');
        else{
            var curr,
            prev,
            it=0;
            curr=this.head;
            prev=curr;

            if(index===0){
                this.head=curr.next;
            }else{
                while(it<index){
                    it++;
                    prev=curr;
                    curr=curr.next;
                }
              prev.next=curr.next;
            }
            this.size--;
            return curr.element;
        }
    }
    removeElement(element){
        var current=this.head;
        var prev=null;
        while(current!=null){
            if(current.element===element){
                if(prev==null){
                    this.head=current.next;
                }else{
                    prev.next=current.next;
                }
                this.size--;
                return current.element;
            }
            prev=current;
            current=current.next;
        }
        return -1;
    }
    indexOf(element){
        var count=0;
        var current=this.head;
        while(current!=null){
            if(current.element===element)return count;
            count++;
            current=current.next;
        }
        return -1;
    }
    isEmpty(){
        return this.size==0;
    }
    size_of_list(){
        return ll
    }
    printlist(ll){
        var curr=this.head;
        var str="";
         while(curr){
          console.log(curr.element);
          curr=curr.next;
        }
    }
}
var ll=new Linkedlist();
ll.add(2);
ll.add(99);
ll.add(2.5);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(16);
console.log(`Value Found At Position:${ll.indexOf(16)}`);
console.log(ll.size_of_list());
ll.printlist();
