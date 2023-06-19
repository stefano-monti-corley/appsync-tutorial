import { util } from '@aws-appsync/utils';

export function request(ctx) {
  return dynamoDBGetItemRequest({ name: ctx.args.name });
}

export function response(ctx) {
  return ctx.result;
}

/**
 * A helper function to get a DynamoDB item
 */
function dynamoDBGetItemRequest(key) {
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues(key),
  };
}