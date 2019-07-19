// describe('paciente', function(){

//     it('deve calcular o imc', function(){
        
//         var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

//         expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
//     });

// })

describe('paciente', function(){

    it('Deve calcular o imc', function(){
        var guilherme = new Paciente("Guilherme", 20, 90, 109);

        expect(guilherme.imc()).toEqual(90 / (109*109))
    })

    it('Deve calcular os batimentos', function(){

        var guilherme = new Paciente("Guilherme", 20, 90, 109);

        expect(guilherme.batimentos()).toEqual(20 * 365 * 24 * 60 * 80);
    })
})