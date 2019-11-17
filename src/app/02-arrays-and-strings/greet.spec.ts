import { greet } from './greet';

describe('greet', () => {
    it('should return value contains mohsin', () => {
        expect(greet('mohsin')).toContain('mohsin');
    });
})

