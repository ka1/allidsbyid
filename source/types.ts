export type idElement = Record<string, any>;

export interface allIdsByIdObjectNumbered {
    allIds: number[];
    byId: {[keys: number]: any};
}

export interface allIdsByIdObjectStringed {
    allIds: (string)[];
    byId: {[keys: string]: any};
}

export interface allIdsByIdObjectStringOrNumber {
    allIds: (string | number)[];
    byId: {[keys: string]: any};
}

export interface allIdsByIdObjectStrictStringOrNumber {
    allIds: (string | number)[];
    byId: {[keys: string]: object};
}

export interface allIdsByIdObjectStrictStringed {
    allIds: string[];
    byId: {[keys: string]: object};
}

export interface allIdsByIdObjectStrictNumbered {
    allIds: number[];
    byId: {[keys: number]: object};
}
