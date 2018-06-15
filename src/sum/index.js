const add = (...args) => ({
    value: () => [...args].reduce((acc, curr) => acc + curr),
    add: (...args2) => ({
        value: () => [...args].reduce((acc, curr) => acc + curr) + [...args2].reduce((acc, curr) => acc + curr)
    })
});

export default add;
