const add = (...args) => {
    return ({
        value: () => [...args].reduce((acc, curr) => acc + curr),
        add: (...args2) => add(...args, ...args2)
    });
};

export default add;

//  EXAMPLE WITH A CLASS
//
// class Add {
//     constructor(nums, startingTotal = 0) {
//         this.total = nums.reduce((total, n) => total + n, startingTotal);
//     }

//     value() {
//         return this.total;
//     }

//     add(...nums) {
//         return new Add(nums, this.value());
//     }
// }

// const add = (...nums) => {
//     return new Add(nums);
// };

// export default add;