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
    try{
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
catch{
        console.log(`${moduleName} is not a valid module`)
        return false;
}
}
console.log(hasPermissions("getProduct", "trainer", "delete"));
