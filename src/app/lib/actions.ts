"use server";

import { redirect } from "next/navigation";
import { signIn } from "../auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { connectToDB } from "./utils";
import { Client } from "./model";

export const authenticate = async (formData: FormData) => {
    const {login, password} = Object.fromEntries(formData);
    try{
        await signIn("credentials", { login, password });
    } catch(e) {
        if (isRedirectError(e)) {
            redirect("/")
        }
    }
}



export const changeStatus = async (сlientId: string, status: string) => {
    try{
        connectToDB();
        await Client.updateOne({ _id: сlientId }, { status: status });
    } catch(e){
        console.log(e)
    }
}