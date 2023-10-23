import { getUser } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en Funciones 05', () => {
  test('getUser debe de retornar un objeto ', () => {
    

    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };


    const user = getUser();
    
    expect(testUser).toBe( user);
  })
  
})
