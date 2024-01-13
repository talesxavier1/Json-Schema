export class FunctionProps {
    functionDefinition;
    tagName;

    constructor({ functionDefinition, tagName }) {
        this.functionDefinition = functionDefinition;
        this.tagName = tagName;
    }
}