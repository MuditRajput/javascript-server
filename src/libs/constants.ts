import { IPermissions } from './Interfaces';
export const permissions: IPermissions = {
    getUsers: {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: []
    },

    getProduct: {
        all: ['head-manager'],
        read : ['marketing-head'],
        write : ['manager'],
        delete: []
    }
};


export const payLoad = {
    'iss': 'Successive Technologies',
    'iat': 1604858574,
    'exp': 1636394601,
    'aud': 'www.successive.in',
    'sub': 'Learn and Implement',
    'email': '',
    'password': ''
};