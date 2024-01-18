/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      period
      name
      ageRange
      maxStudents
      students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      period
      name
      ageRange
      maxStudents
      students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      period
      name
      ageRange
      maxStudents
      students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      name
      parent {
        id
        name
        email
        createdAt
        updatedAt
        __typename
      }
      classes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userStudentsId
      __typename
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      name
      parent {
        id
        name
        email
        createdAt
        updatedAt
        __typename
      }
      classes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userStudentsId
      __typename
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      name
      parent {
        id
        name
        email
        createdAt
        updatedAt
        __typename
      }
      classes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userStudentsId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStudentClasses = /* GraphQL */ `
  mutation CreateStudentClasses(
    $input: CreateStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    createStudentClasses(input: $input, condition: $condition) {
      id
      classId
      studentId
      class {
        id
        period
        name
        ageRange
        maxStudents
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        name
        createdAt
        updatedAt
        userStudentsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudentClasses = /* GraphQL */ `
  mutation UpdateStudentClasses(
    $input: UpdateStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    updateStudentClasses(input: $input, condition: $condition) {
      id
      classId
      studentId
      class {
        id
        period
        name
        ageRange
        maxStudents
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        name
        createdAt
        updatedAt
        userStudentsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudentClasses = /* GraphQL */ `
  mutation DeleteStudentClasses(
    $input: DeleteStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    deleteStudentClasses(input: $input, condition: $condition) {
      id
      classId
      studentId
      class {
        id
        period
        name
        ageRange
        maxStudents
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        name
        createdAt
        updatedAt
        userStudentsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
