interface Internal {
    a: boolean,
}

export default function createInternal() {
    return {
        one: { a: true } as Internal,
    };
}