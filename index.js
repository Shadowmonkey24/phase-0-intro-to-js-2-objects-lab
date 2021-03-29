// Write your solution in this file!
const employee = {
    name: 'Dorothy F. Boone',
    streetAddress: '994 Grasselli Street'
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const updatedEmployee = Object.assign({}, employeeObject, { [key]: value });
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employeeObject;
}

function deleteFromEmployeeByKey(employeeObject, key) {
    const updatedEmployee = Object.assign({}, employeeObject);
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key];
    return employeeObject;
}
