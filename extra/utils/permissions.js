import {permissions} from '../constants';
export default function hasPermissions (moduleName, role, permissionType){
    console.log('Checked for permissions:');
    const isModulePresent = permissions[moduleName];
    const isRolePresent = permissions[moduleName][permissionType];
    if (!isModulePresent || !isRolePresent) {
        console.log(`${moduleName} and/or ${permissionType} is invalid`);
        return false;
    }
    else {
        if (permissions[moduleName].all.includes(role) || permissions[moduleName][permissionType].includes(role)) {
            console.log(`${role} has ${permissionType} permissions`);
            return true;
        }
        console.log(`${role} does not have ${permissionType} permissions`);
        return false;
    }
}
