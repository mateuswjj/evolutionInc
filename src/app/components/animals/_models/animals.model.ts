import { Characteristics } from "./characteristics.model";
import { Taxonomy } from "./taxonomy.model";

export interface Animals {
    name: string,
    taxonomy: Taxonomy,
    locations: string[]
    characteristics: Characteristics
}
