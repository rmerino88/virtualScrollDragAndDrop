export class Pais {
    name: string;
    alpha2Code: string;
    image: string;
    releaseDate: string;
    genres: string[];
    overview: string;

    constructor(name: string, alpha2Code: string) {
        this.name = name;
        this.alpha2Code = alpha2Code;
    }
}
