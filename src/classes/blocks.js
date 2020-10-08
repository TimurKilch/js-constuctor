import {col, css, row} from "../utils";

class Block {
    constructor(type,value,options) {
        this.type = type
        this.value = value
        this.options = options
    }

    toHtML(){
    throw new Error('Метод HTML должен быть реализован')
    }
}

export class TitleBlock extends Block{
    constructor(value,options) {
        super('title',value,options);
    }
    toHtML() {
        const {tag,styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`),css(styles))
    }
}

export class ImageBlock extends Block{
    constructor(value,options) {
        super('image',value,options);
    }
    toHtML() {
        const {styles,imageStyles : is,alt = ''} = this.options
        return row(`<img src = "${this.value}" alt = "${alt}" style = "${css(is)}" />`,css(styles))
    }
}

export class ColumnsBlock extends Block{
    constructor(value,options) {
        super('columns',value,options);
    }
    toHtML() {
        const {styles} = this.options
        const html = this.value.map(col).join('')
        return row(html,css(styles))
    }
}

export class TextBlock extends Block{
    constructor(value,options) {
        super('text',value,options);
    }
    toHtML() {
        const {tag,styles} = this.options
        return row(col( `<${tag}>${this.value}</${tag}>`),css(styles))
    }
}