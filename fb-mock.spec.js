test('Mock Function 1 should be return 1', () => {
    const returnInt = jest.fn(1).mockReturnValue(1)
    expect(returnInt(1)).toBe(1)
    expect(returnInt).toBeCalledWith(1)

})