function HtmlElement(){
    this.name = "ed"
    this.click = () => "Clicked"
}

HtmlElement.prototype.focus = () => "focused";

function HtmlSelectElement(arr = [2,3,4]){
    this.items = arr;
    this.removeItem =  selected => this.items.forEach(item => {
        if (selected === item ){
            const index = this.items.indexOf(item);
            return this.items.splice(index, 1)
        }
    });

    this.addItem = (selected) => this.items.push(selected);
    this.loopFunc = () => this.items.map(item => `<select>${item}</select>`).join('')
    this.render = () => {return `<option>  
    ${this.loopFunc()}
     </option>`}
}

HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;