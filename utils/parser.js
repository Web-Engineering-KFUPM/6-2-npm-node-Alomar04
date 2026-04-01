import _ from "lodash";

export function parseNumbers(input) {
  const parsed = _.compact(
    _.map(input, (str) => {
      const value = Number(str);
      return Number.isFinite(value) ? { value } : null;
    })
  );

  return _.map(parsed, "value");
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}
