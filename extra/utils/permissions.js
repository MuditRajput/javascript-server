import {permissions} from '../constants';
export default function hasPermissions (moduleName, role, permissionType){
    if((Object.keys(permissions)).includes(moduleName)){
        if((Object.keys(permissions[moduleName]).includes(permissionType))){
            console.log("Checked for permissions:")
            if (permissions[moduleName].all.includes(role)){
                console.log(`${role} has ${permissionType} permissions \n`);
                return true;
            }
            else 
            if (permissions[moduleName][permissionType].includes(role)){
                console.log(`${role} has ${permissionType} permissions \n`);
                return true;
            }
            else{
                console.log(`${role} does not have ${permissionType} permissions \n`);
                return false;
            }
        }
        else{
            console.log(`${permissionType} is not a valid permission type\n`)
        }
    }
    else{
        console.log(`${moduleName} is not a valid module\n`)
    }
}
