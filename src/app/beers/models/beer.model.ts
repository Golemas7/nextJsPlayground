export interface Beer {
    id: number;
    name: string;
    tagline: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    first_brewed: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    image_url: string;
    abv: number;
    ibu: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    target_fg: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    attenuation_level: number;
    volume: BeerMeasuringAmount;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    boil_volume: BeerMeasuringAmount;
    method: BeerMethod;
    ingredients: BeerIngredients;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    food_pairing: FoodPairings;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    brewers_tips: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    contributed_by: string;
}

export interface BeerMethod {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    mash_temp: MashTemps;
    fermentation: Fermentation;
    twist: string;
}

export type MashTemps = ReadonlyArray<MashTemp>;

export interface MashTemp {
    temp: BeerMeasuringAmount;
    duration: number;
}

export interface Fermentation {
    temp: BeerMeasuringAmount;
}

export interface BeerIngredients {
    malt: ReadonlyArray<BeerMaltIngredient>;
    hops: ReadonlyArray<BeerHopsIngredient>;
    yeast: string;
}

export interface BeerMaltIngredient {
    name: string;
    amount: BeerMeasuringAmount;
}

export interface BeerHopsIngredient extends BeerMaltIngredient {
    add: string;
    attribute: string;
}

export interface BeerMeasuringAmount {
    value: number;
    unit: string;
}

export type FoodPairings = ReadonlyArray<string>;
