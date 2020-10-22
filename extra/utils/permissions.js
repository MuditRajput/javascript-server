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
const hasPermissions = (moduleName, role, permissionType) =>{
    if((Object.keys(permissions)).includes(moduleName)){
        if (permissions[moduleName].all.includes(role)){
            console.log(`${role} has ${permissionType} permissions`);
            return true;
        }
        else 
        if (permissions[moduleName][permissionType].includes(role)){
            console.log(`${role} has ${permissionType} permissions`);
            return true;
        }
        else{
            console.log(`${role} does not have ${permissionType} permissions`);
            return false;
        }
    }
    else{
        console.log(`${moduleName} is not a valid module`)
    }
}

hasPermissions("getProduct", "trainer", "delete");
