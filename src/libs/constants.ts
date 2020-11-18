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
    'aud': 'www.successive.in',
    'sub': 'Learn and Implement',
    'email': ''
};
export const seedData1 = {
    name: 'Head-Trainer',
    email: 'head.trainer@successive.tech',
    role: 'head-trainer',
    password: 'headhead'
};

export const seedData2 = {
    name: 'Trainer',
    email: 'trainer@successive.tech',
    role: 'trainer',
    password: 'trainertrainer'
};