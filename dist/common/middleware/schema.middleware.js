export const schemaValidate = (schema) => {
    return (request, response, next) => {
        const errors = [];
        const keys = ["body", "params", "query"];
        for (const key of keys) {
            const schemaKey = schema[key];
            if (!schemaKey) {
                continue;
            }
            const result = schemaKey.safeParse(request[key]);
            if (!result.success) {
                errors.push(...result.error.issues.map((item) => item.message));
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
