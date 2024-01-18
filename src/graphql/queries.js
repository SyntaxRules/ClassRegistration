/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        period
        name
        ageRange
        maxStudents
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        userStudentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudentClasses = /* GraphQL */ `
  query GetStudentClasses($id: ID!) {
    getStudentClasses(id: $id) {
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
export const listStudentClasses = /* GraphQL */ `
  query ListStudentClasses(
    $filter: ModelStudentClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        classId
        studentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studentClassesByClassId = /* GraphQL */ `
  query StudentClassesByClassId(
    $classId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentClassesByClassId(
      classId: $classId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        classId
        studentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studentClassesByStudentId = /* GraphQL */ `
  query StudentClassesByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentClassesByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        classId
        studentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
