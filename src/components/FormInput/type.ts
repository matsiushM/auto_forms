export interface Auto {
    id: string
    marka: string
    model: string
}

export interface DescriptionParts {
    login: string,
    mainAuto: Auto,
    auto: Auto[],
    year: string,
    volume: number,
    fuel: string,
    engineType: string,
    typeBody: string,
    gearBox: string,
    parts: string,
    numberParts: string,
    description: string,
    pratsState: string,
    modification: string,
    shelf: string,
    storage: string,
}