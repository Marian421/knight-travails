class Ventrice {
    constructor(visited = false, distance = 0, predecessor = null) {
        this.visited = visited;
        this.distance = distance;
        this.predecessor = predecessor;
    }
}

const Board = (() => {
    const board = [];
    
    for (let i = 0; i < 8; i++){
        const temp = [];
        for (let j = 0; j < 8; j++) {
            temp.push(new Ventrice());
        }
        board.push(temp)
    }
    
    const get = () => board;
    
    
    
    return {get};
})();

const moves = ((x, y) => {
    const availableMoves = [];

    const allMoves = ((x, y) => {
        if (checkBoundary(x+2, y+1)) availableMoves.push([x+2, y+1]);
        if (checkBoundary(x+2, y-1)) availableMoves.push([x+2, y-1]);

        if (checkBoundary(x+1, y+2)) availableMoves.push([x+1, y+2]);
        if (checkBoundary(x-1, y+2)) availableMoves.push([x-1, y+2]);

        if (checkBoundary(x-2, y+1)) availableMoves.push([x-2, y+1]);
        if (checkBoundary(x-2, y-1)) availableMoves.push([x-2, y-1]);

        if (checkBoundary(x-1, y-2)) availableMoves.push([x-1, y-2]);
        if (checkBoundary(x+1, y-2)) availableMoves.push([x+1, y-2]);
    })

    
    const checkBoundary = (x, y) => {
        if (x < 0 || y < 0 || x > 7 || y > 7) {
            return false;
        } else return true;
    }
    allMoves(x, y);

    return availableMoves;

})

const knightMoves = ([x, y], [tx, ty]) => {
    const board = Board.get();
    let availableMoves;
    const shortestPath = [];
    let stop = false;

    let knight_x ;
    let knight_y ;

    const queue = [];
    queue.push([x, y]);
    board[x][y].visited = true;

    while (queue.length > 0 && !stop) {
        knight_x = queue[0][0];
        knight_y = queue[0][1];

        if (knight_x === tx && knight_y === ty)
        {
            stop = true;
            shortestPath.unshift([tx, ty]);

            while (board[knight_x][knight_y].predecessor !== null){
                const predecessor = board[knight_x][knight_y].predecessor;
                shortestPath.unshift(predecessor);
                knight_x = predecessor[0];
                knight_y = predecessor[1];             
            }
        } else {

            availableMoves = moves(knight_x, knight_y);
            availableMoves.forEach((move) => {
                if (!board[move[0]][move[1]].visited) {
                    board[move[0]][move[1]].visited = true;
                    board[move[0]][move[1]].distance = board[knight_x][knight_y].distance + 1;
                    board[move[0]][move[1]].predecessor = [knight_x, knight_y];
                    queue.push([move[0], move[1]]);
                }
            })
    
            queue.shift();
        }

    }

    return shortestPath;

};

console.log(knightMoves([3,3], [0,0]));