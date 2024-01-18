/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateStudentClasses = /* GraphQL */ `
  subscription OnCreateStudentClasses(
    $filter: ModelSubscriptionStudentClassesFilterInput
  ) {
    onCreateStudentClasses(filter: $filter) {
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
export const onUpdateStudentClasses = /* GraphQL */ `
  subscription OnUpdateStudentClasses(
    $filter: ModelSubscriptionStudentClassesFilterInput
  ) {
    onUpdateStudentClasses(filter: $filter) {
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
export const onDeleteStudentClasses = /* GraphQL */ `
  subscription OnDeleteStudentClasses(
    $filter: ModelSubscriptionStudentClassesFilterInput
  ) {
    onDeleteStudentClasses(filter: $filter) {
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
