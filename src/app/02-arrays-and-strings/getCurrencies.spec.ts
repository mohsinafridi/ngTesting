import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should return currencies list', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
})