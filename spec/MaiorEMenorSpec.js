describe("MaiorEMenor", function(){
    it("deve entender numero em ordem nao sequencial", function(){
        var algoritmo = new MaiorEMenor();

        algoritmo.encontra([5, 15, 7, 9]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);        
    });
})

describe("MaiorEMenor", function(){
    it("deve entender numero em ordem sequencial decrescente", function(){
        var algoritmo = new MaiorEMenor();

        algoritmo.encontra([15, 9, 7, 5]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);        
    });
})

describe("MaiorEMenor", function(){
    it("deve entender numero em ordem sequencial crescente", function(){
        var algoritmo = new MaiorEMenor();

        algoritmo.encontra([5, 7, 9, 15]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);        
    });
})

describe("MaiorEMenor", function(){
    it("deve entender um unico numero", function(){
        var algoritmo = new MaiorEMenor();

        algoritmo.encontra([5]);

        expect(algoritmo.pegaMaior()).toEqual(5);
        expect(algoritmo.pegaMenor()).toEqual(5);        
    });
})