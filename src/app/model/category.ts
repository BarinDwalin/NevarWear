export interface ICategory{
    id: number;
    parentID: number;
    name: string;
    img: string;
}

export interface ICategoryInfo extends ICategory{
    countCategories: number;
    countThings: number;
}