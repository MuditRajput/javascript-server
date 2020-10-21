const permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer','reviewer'],
    write : ['trainer'],
    delete: [],
    },

    'getProduct': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: ['manager'],
    },
}
function hasPermissions(moduleName, role, permissionType){
    if (permissions[moduleName].all.includes(role)){
        console.log("true");
    }
    else {
        if (permissions[moduleName][permissionType].includes(role)){
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
}
hasPermissions("getProduct", "head-trainer", "delete");
