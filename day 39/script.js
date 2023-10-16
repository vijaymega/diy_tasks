//Q1.Create  a  Hash  Table  with  hash,  set,  get,  search  and  display methods

class HashTable{
    constructor(size=50){
        this.buckets=new Array(size)
        this.size=size
    }
    hash(key){
        return key.toString().length % this.size
    }
    set(key,value){
      let index=this.hash(key)

      if(!this.buckets[index]){
        this.buckets[index]=[]
      }
      this.buckets[index].push([key,value])
      return index
    }

    get(key){
        let index=this.hash(key)
  
        if(!this.buckets[index]){
          return null
        }
        for(let bucket of this.buckets[index]){
          if(bucket[0]===key){
            return bucket[1]
          }
        }
      }
}

const dinesh=new HashTable()
dinesh.set("dj01","Data Structure And Algorithms")
dinesh.set("dj02","Data Analysis")
dinesh.set("dj03","Cyber security")
dinesh.set("dj04","Data Scientist")
dinesh.set("dj05","Full Stack Web Devolpment")

dinesh.get("dj01")
console.log(dinesh.get("dj01"));
console.log(dinesh.get("dj07"));
console.log(dinesh.get("dj05"));