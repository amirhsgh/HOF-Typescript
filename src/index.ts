function evenNumberFilter(even:number) :boolean {
    if (even % 2 === 0) {
        return true
    }
    return false;
}

function oddNumberFilter(odd:number) :boolean {
    if (odd % 2 != 0) {
        return true
    }
    return false;
}

function filter(evenOrodd: Function):number[] {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    let result:number[] = []
    for(let number of numbers) {
        if (evenOrodd(number)) {
            result.push(number)
        }
    }

    return result
}

export { filter, evenNumberFilter, oddNumberFilter }