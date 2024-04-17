import { createSelector } from "reselect";

const getCustomerId = (state, props) => props.customerId;

const getOrdersById = (state) => state.orders.byId;

const getOrdersAllIds = (state) => state.orders.allIds;

const getOrdersByCustomerId = createSelector(
  [getOrdersById, getOrdersAllIds, getCustomerId],
  (ordersById, ordersAllIds, customerId) => {
    return ordersAllIds
      .map((id) => ordersById[id])
      .filter((order) => order.customerId === customerId);
  }
);
