class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  createTokens(num) {

    const tokens = [];
    
    for (let i = 0; i < num+1; i++) {
        let token = new Token(i, this);
        this.tokens.push(token);
    }
    return tokens;
}
}
