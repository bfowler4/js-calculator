/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function() {
    var memory = 0;
    var total = 0;

    return {
        /**
        * sets the `total` to the number passed in
        * @param  { Number } x
        * @return { Number }    current total
        */
        load: (num) => {
            if (typeof num === 'number') {
                total = num;
                return num;
            } else {
                throw IllegalArgumentException(`$(num) is not a number`);
            }
        },

        /**
        * Return the value of `total`
        * @return { Number }
        */
        getTotal: () => {
            return total;
        },

        /**
        * Sums the value passed in with `total`
        * @param { Number } x
        */        
        add: (num) => {
            if (typeof num === 'number') {
                total += num;
                return total;
            } else {
                throw IllegalArgumentException(`$(num) is not a number`);
            }
        },

        /**
        * Subtracts the value passed in from `total`
        * @param  { Number } x
        */
        subtract: (num) => {
            if (typeof num === 'number') {
                total -= num;
                return total;
            } else {
                throw IllegalArgumentException(`$(num) is not a number`);
            }
        },
        
        /**
        * Multiplies the value by `total`
        * @param  { Number } x
        */
        multiply: (num) => {
            if (typeof num === 'number') {
                total *= num;
                return total;
            } else {
                throw IllegalArgumentException(`$(num) is not a number`);
            }
        },

        /**
        * Divides the value passing in by `total`
        * @param  { Number } x
        */       
        divide: (num) => {
            if (typeof num === 'number' && num !== 0) {
                total /= num;
                return total;
            } else if (num === 0) {
                throw IllegalArgumentException(`Can't divide by 0`)
            } else {
                throw IllegalArgumentException(`$(num) is not a number`);
            }
        },

        /**
        * Return the value stored at `memory`
        * @return { Number }
        */
        recallMemory: () => {
            return memory;
        },
  
        /**
         * Stores the value of `total` to `memory`
        */
        saveMemory: () => {
            memory = total;
        },

        /**
        * Clear the value stored at `memory`
        */
        clearMemory: () => {
            memory = 0;
        }
    }
}
