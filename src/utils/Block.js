class BlockClass {
  constructor() {
    this.width = "100%"
    this.height = "250px"
  }

}

export class MiniBlockClass {
  constructor(width = "200px", height = "200px") {
    this.width = width;
    this.height = height;
  }
}

export class Input extends MiniBlockClass {
  constructor(width = '150px', height = '70px', type = "text") {
    super(width, height);
    this.type = type
  }
}

export class Div extends MiniBlockClass {
  constructor(width = '150px', height = '70px', text = "Ваше сообщение...") {
    super(width, height);
    this.text = text
  }
}

export default BlockClass