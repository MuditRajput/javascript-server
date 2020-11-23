const Validation = {
    create: {
        password: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Password is invalid'
        },
        email: {
            required: true,
            regex: /@successive.tech$/,
            in: ['body'],
            errorMessage: 'Email is invalid'
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        },
        sortBy: {
            required: false,
            default: 'createdAt',
            in: ['query'],
            string: true
        },
        sortOrder: {
            required: false,
            number: true,
            default: -1,
            in: ['query'],
        }
    },
    getOne: {
        id: {
            required: true,
            in: ['params'],
            string: true,
        }
    },
    update: {
        originalId: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom(dataToUpdate) {
                console.log('hey');
            }
        }
    }
};
export default Validation;
