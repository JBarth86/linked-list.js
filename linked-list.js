class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //internal helper function. Provides uniform insertion logic and size tracking
  _insert(data, next) {
    this.size++
    return new Node(data, next)
  }

  _invalidIndex(index) {
    console.log("index: " + index + " out of range\nList size: " + this.size)
  }

  insertFirst(data) {
    this.insertAt(0, data)
  }

  insertLast(data) {
    this.insertAt(this.size, data)
  }

  insertAt(index, data) {
    //validate index
    if (index < 0 || index > this.size) {
      this._invalidIndex(index)
    }
    //insert at beginning of list. calls to insertFirst() are also handled here
    else if (index == 0) {
      this.head = this._insert(data, this.head)
    }
    //index is valid and not 0. calls to insertLast() are also handled here
    else {
      let current = this.head
      let insertsAt = 1
      //insertsAt is equal to the index of current plus 1 because...
      //we are effectively inserting at the index after current
      while (insertsAt < index) {
        //step through the list until we're ready to insert at index
        current = current.next
        insertsAt++
      }

      current.next = this._insert(data, current.next)
    }
  }

  removeFirst() {
    this.removeAt(0)
  }

  removeLast() {
    this.removeAt(this.size -1)
  }

  removeAt(index) {
    //validate index
    if(index < 0 || index >= this.size) {
      this._invalidIndex(index)
    }
    //remove first item in list. calls to removeFirst() are also handled here
    else if(index == 0){
      this.head = this.head.next
      //remember to update list size
      this.size--
    }
    //index is valid and not 0. calls to removeLast() are also handled here
    else {
      let current = this.head
      let removeAt = 1
      //removeAt is equal to index of current plus 1 because...
      //we are again effectively removing the item after current
      while(removeAt < index) {
        //step through the list until we're ready to remove at index
        current = current.next
        removeAt++
      }
      //set current next pointer to next pointer of item being removed at index
      current.next = current.next.next
      //remember to update list size
      this.size--
    }
  }

  getFirstItem() {
    return this.getItemAt(0)
  }

  getLastItem() {
    return this.getItemAt(this.size -1)
  }

  getItemAt(index) {
    if(index < 0 || index >= this.size) {
      _invalidIndex(index)
    }
    //index is valid, return the data from the node at index
    else {
      let current = this.head
      let currentIndex = 0

      while(currentIndex < index) {
        //step through the list until we get to the desired node
        current = current.next
        currentIndex++
      }
      //return that node's data
      return current.data
    }
  }
  //print list data
  printList() {
    let current = this.head
    let index = 0;
    while (current) {
      console.log("Item index " + index + ": " + current.data)
      current = current.next
      index++
    }

    console.log("\nList Size: " + this.size)
  }
}
