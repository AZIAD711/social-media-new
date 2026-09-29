import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

interface ISchema {
    body?: ZodType;
    params?: ZodType;
    query?: ZodType;
}

export const schemaValidate = (schema: ISchema) => {
    return (
        request: Request,
        response: Response,
        next: NextFunction
    ): void | Response => {
        const errors: string[] = [];

        const keys: (keyof ISchema)[] = ["body", "params", "query"];

        for (const key of keys) {
            const schemaKey = schema[key];

            if (!schemaKey) {
                continue;
            }

            const result = schemaKey.safeParse(request[key]);

            if (!result.success) {
                errors.push(
                    ...result.error.issues.map((item) => item.message)
                );
            }
        }

        if (errors.length > 0) {
            return response.status(400).json({
                success: false,
                message: "Validation Error",
                errors,
            });
        }

        next();
    };
};