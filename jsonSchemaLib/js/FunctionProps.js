export class FunctionProps {
    functionDefinition;
    tagName;

    constructor({ functionDefinition, tagName }) {
        this.functionDefinition = functionDefinition;
        this.tagName = tagName;
        //TODO CRIAR VERIFICAÇÃO DE PARAMETRO. PERMITIR SOMENTE FUNÇOES OU OBJETOS DE FUNÇOES.
    }
}