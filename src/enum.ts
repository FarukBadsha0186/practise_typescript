//Enum 
// Set of fixed string leteral 

type UserRoles = "admin" | "user" | "Viewer";


const canEdit = (role: UserRoles) => {
    if (role === "admin" || role === "user") {
        return true;

    } else return false;

};

const iseditpermissionable = canEdit("admin");
console.log(iseditpermissionable);
