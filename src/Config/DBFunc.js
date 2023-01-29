import { db } from "./Firebase";

export const IfUsernameAlreadyPresent = async (username) => {
    return await db.collection("user")
        .where("username", "==", username)
        .get()
        .then((snap) => {
            return (!snap.empty)
        })
}