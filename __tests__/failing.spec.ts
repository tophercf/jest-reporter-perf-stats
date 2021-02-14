describe('a failing spec within loan', () => {
    test('spec fail 1 + 1 != 3', ()=>{
        expect(1+1).toEqual(3);
    })
    test.skip('spec fail 1 + 2 != 5', ()=>{
        expect(1+2).toEqual(5);
    })

    describe('within a domain split to a feature, our 12 month product', () => {
        test('fail this test for string match', () => {
            expect('test').toEqual('tes');
        })

        test.todo('fail this test for over jest time');

        test.skip('skip a test within nested describe block', () => {
            expect('test').toContain('a');
        })
    })
})

