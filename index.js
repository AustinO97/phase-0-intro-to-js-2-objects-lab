const employee = {
    name: 'Sam',
    streetAdress: '11 Broadway',
};
/*
function updateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value

  return employee;
};

const newEmployee = updateEmployeeWithKeyAndValue (
    employee,
    'Jim',
    '1234',
);
*/
newEmployee;

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee};

    newObj[key] = value;

    return newObj;
}

const newnew = updateEmployeeWithKeyAndValue (
    employee,
    'Jim',
    '1234'
);
newObj;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}
const newOne = destructivelyUpdateEmployeeWithKeyAndValue (employee, "yo", " 4321");
newOne;

function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee};

    delete newObj[key]

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

