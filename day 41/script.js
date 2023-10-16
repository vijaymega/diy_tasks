//Q1.Create a Double Linked List with insertion operation

class Node{
    constructor(data){
        this.prev=null
        this.data=data
        this.next=null
    }
}

class  DoubleLinkedList{
    constructor(){
        this.head=null
        this.size=null
    }
    insert(data){
        var node=new Node(data)
        if(this.head==null)
        {
            this.head=node
        }
        else{
            var n=this.head
            while(n.next!==null)
            {
                n=n.next
            }
            n.next=node
            node.prev=n
        }
        this.size++
    }
    printlist(){
        var curr=this.head;
        var str="";
         while(curr){
          console.log(curr.data);
          curr=curr.next;
        }
    }
}
const dinesh=new DoubleLinkedList()

dinesh.insert('1')
dinesh.insert('99')
dinesh.insert('2')
dinesh.insert('2.5')
dinesh.insert('3')
dinesh.insert('4')
console.log(dinesh);

dinesh.printlist()