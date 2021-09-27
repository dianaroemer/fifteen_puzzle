// To do - 
// Create slot objects
// Create tile objects
// Store tile objects inside of slot objects?
// Swap tile object data between slot objects

// Establish base functions for each slot object
    // e.g. slide tile left, right,etc.
        // XXXUPDATEXXX
        // Operate from empty slot instead of from actual tiles?
    
// Operator function
    // Decides which tile to move at any given time into which slot
    // Decision functionality on ordering tiles
        // XXXUPDATEXXX 
        // Establish train function for trailing pieces?
        // Decides between any active decision pieces. choosing lower, but has to keep active track of current train pieces and their position to always decide lowest piece
    // Establish instantiated board in correct position - e.g. move tiles 1,2,3 into top/middle row to prepare for initial train 

// Parity tester
    // Is current board solveable?

// Allow user to populate board with set of tiles 
    // || OR ||
// Randomize function to take current board and randomize for given span of movesets - board must theoretically be solveable by inverse linear movement path of tiles, therefore randomize can generate 'spontaneous' boards for user to solve

// Basic Front-End user functionality
    // If you click or drag a peace, it moves in the expected way
    // Must perfom legality check on given user input - can only move a piece in legal ways

// Mirror Front-End user functionality with function to solve, allowing user to 'race' to solve the board against built in function
    // Theoretically once solve functionality is completed, bot difficulty can be decided by adding delay function (wait()) to create roughly deterministic challenge levels, where wait(0seconds) is impossible difficulty
