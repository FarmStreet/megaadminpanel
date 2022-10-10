import { classNames } from './classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with extra params', () => {
        expect(classNames('someClass', {}, ['addOne', 'addTwo']))
            .toBe('someClass addOne addTwo');
    });
    test('with mods', () => {
        expect(classNames('someClass', { mod1: true, mod2: true }))
            .toBe('someClass mod1 mod2');
    });
    test('with mods and params', () => {
        expect(classNames(
            'someClass',
            { mod1: true, mod2: true },
            ['addOne', 'addTwo'],
        ))
            .toBe('someClass addOne addTwo mod1 mod2');
    });
    test('with mods one false and params', () => {
        expect(classNames(
            'someClass',
            { mod1: true, mod2: false },
            ['addOne', 'addTwo'],
        ))
            .toBe('someClass addOne addTwo mod1');
    });
    test('with mods one undefined and params', () => {
        expect(classNames(
            'someClass',
            { mod1: true, mod2: undefined },
            ['addOne', 'addTwo'],
        ))
            .toBe('someClass addOne addTwo mod1');
    });
});
