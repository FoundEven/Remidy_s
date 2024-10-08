import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    users {
      _id
      email
      firstName
      shoppingCart {
        _id
        category
        itemDescription
        itemRegion
        itemName
        price
        image
      }
    }
  }
`;

export const GET_ONE_USER_CART = gql`
  query getUserCart($id: ID!) {
    user(_id: $id) {
      shoppingCart
    }
  }
`;

export const GET_ITEMS = gql`
  query Items {
    items {
      _id
      itemName
      itemDescription
      itemRegion
      category
      price
      image
    }
  }
`;

export const GET_ONE_ITEM = gql`
  query Item($itemId: ID!) {
    item(itemId: $itemId) {
      _id
      category
      itemDescription
      itemRegion
      itemName
      price
      image
    }
  }
`;
