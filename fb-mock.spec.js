function myAuth(authService){

    this.authService = authService
    
    this.signInWithFacebook = (phone, password) => {
        let fbUserOject = this.authService(phone, password)
        return fbUserOject
       
    }
   
    
}

test('Mock Function 1 should be return 1', () => {
    const returnInt = jest.fn(1).mockReturnValue(1)
    expect(returnInt(1)).toBe(1)
    expect(returnInt).toBeCalledWith(1)

})


test('Call sign in with facebook with valid credentail should pass', () => {
    const facebookAuth = jest.fn('0817777788', 'abc12345')
    .mockReturnValue({ name: 'Weera', facebookId: '1234567890', email: 'wkasetsin@gmail.com'})
    let app = new myAuth(facebookAuth)
    let phone = '0817777788'
    let password = 'abc12345'
    let value = app.signInWithFacebook(phone, password)
    expect(value).toEqual({ name: 'Weera', facebookId: '1234567890', email: 'wkasetsin@gmail.com'})
    expect(facebookAuth).toBeCalled()
    expect(facebookAuth).toBeCalledWith('0817777788', 'abc12345')
})