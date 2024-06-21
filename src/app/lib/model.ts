import mongoose, { Schema, Document, model, connect, Types } from "mongoose";

interface IClient {
    accountNumber: number;
    surname: string;
    name: string;
    lastname: string;
    dateOfBirth: string;
    TIN: number;
    responsible: Types.ObjectId;
    status: string;
}

interface IUser {
    fullName: string;
    login: string;
    password: string;
}

const clientSchema = new Schema<IClient>({
    accountNumber: {
        type: Number,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    TIN: {
        type: Number,
        required: true,
    },
    responsible: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String,
        required: true,
    },
});

const userSchema = new Schema<IUser>({
    fullName: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const User = mongoose.models.User || model<IUser>("User", userSchema);
export const Client = mongoose.models.Client || model<IClient>("Client", clientSchema);