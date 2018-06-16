import add from './';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2, 3).add(5).add(10).value()).toEqual(21);
});
