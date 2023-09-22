import * as dotenv from "dotenv";
import {OpenAI} from "langchain/llms/openai";
import express, {Application, Request, Response} from "express";

const app: Application = express();

//express setup and routes
dotenv.config();

//needed this line to properly parse json objects in req
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const userText: string = req.body.text;

    // langchain code

    const llm = new OpenAI();

    const llmResult = await llm.call(userText);

    res.send(llmResult);
  } catch (err) {
    res.send(`there was an error: ${err}`);
    console.log(err);
  }
});

app.listen(3000);
