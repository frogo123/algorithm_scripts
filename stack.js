const _stack = new WeakMap();
class Stack {
    constructor(){    
    _stack.set(this, []);
    }

    pop() {
        const stackPop = _stack.get(this);
       return (stackPop != 0 ? _stack.get(this).pop(): this.error()) 
    }

    push(value){ 
       _stack.get(this).push(value);
    }

    peek(){
        const stackPeek = _stack.get(this);
        return (stackPeek.length != 0 ? stackPeek[stackPeek.length-1]: this.error())
    }

    error(){
       throw new Error ("You have an empty stack") 
    }

    get count(){
      return  _stack.get(this).length;
    }

}