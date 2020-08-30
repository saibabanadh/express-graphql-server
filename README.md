# express-graphql-server
Implemented Express Server along with GraphQL. MongoDB as database.

# Generic GraphQL Queries

```
{
    appname
}

```
```
{
    addition(x:20, y:20)
}

```

# MongoDB GraphQL

## Mutation Example

```
mutation {
  createUser(
    firstName:"Sai Baba Nadh",
    lastName: "Konda",
    userName: "saibabanadh",
    email: "saibabanadh@gmail.com",
    phone: "7xxx68xxxx",
    address: "Bangalore, Karnataka"
  ){
    firstName
    lastName
    userName
    email
    phone
    address
  }
}
```

## Query Example

```
{
  users {
    id,
    userName,
    email
  }
}

{
  user(id: <id>) {
    userName
  }
}

```

## Multi Query

```
{
  users{
    id,
    firstName
  }
  user(id: <id>){
    id,
    userName,
    email,
    phone
  }
}
```