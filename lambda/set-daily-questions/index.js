import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    PutCommand,
    GetCommand
} from "@aws-sdk/lib-dynamodb";

const TABLE_NAME = "rockpaperquizzes";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
    const response = await fetch("https://the-trivia-api.com/v2/questions?limit=10")
        .then((response) => {
            // The response is a Response instance.
            // You parse the data into a useable format using `.json()`
            return response.json();
        }).then((data) => {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            // upload data to dynamodb
            const getExistingQuestions = async () => {
                body = await dynamo.send(
                    new GetCommand({
                      TableName: tableName,
                      Key: {
                        id: "" // TODO put id here
                      },
                    })
                );
                return body.Item;
            }
            getExistingQuestions().then((existing) => {
                
            }, () => {
                console.log('get existing questions rejected')
            });
        }
    );
};