export type elementType = string | number | object | Array<any> | boolean;

export type idElement = Record<string, any>;
export type idElementStrict = Record<string, any>;

export interface allIdsByIdObject {
    allIds: (string | number)[];
    byId: {[keys: string]: elementType};
}

export interface allIdsByIdObjectStrict {
    allIds: (string | number)[];
    byId: {[keys: string]: object};
}
