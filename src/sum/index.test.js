import add from './';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2, 3).add(5).value()).toEqual(11);
});
