describe('suites for passing specs', () => {
    test('100 * 10 = 1000', ()=>{
        expect(100*10).toEqual(1000);
    })
    describe('nested describe passing spec', () => {
        test('100 * 1 = 100', () => {
            expect(100*1).toEqual(100)
        })
        test('100 * 1 = 100', () => {
            expect(100*1).toEqual(100)
        })
    })
})