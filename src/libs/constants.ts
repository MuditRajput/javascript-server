import { IPermissions } from './interfaces';
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
