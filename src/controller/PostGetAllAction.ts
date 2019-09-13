import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";

/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(request: Request, response: Response) {

    return response.json("API Working")

}