import { z } from "zod";

export const usernameSchema = z
	.string()
	.min(3, "Username must be at least 3 characters")
	.max(20, "Username must not be greater than 20 characters");

export const signUpSchema = z.object({
	username: usernameSchema,
	email: z.string().email({message: "Email is not valid"}),
	password: z.string().min(6).max(20),
});
