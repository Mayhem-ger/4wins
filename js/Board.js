class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7; 
        this.spaces = this.createSpaces(); 
    }
    /**
     * 
     */
    createSpaces() {
        const spaceList = [];
        
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 7; j++ ) {
                spaceList.push([i,j])
            }
        }
        return spaceList
    } 
}
