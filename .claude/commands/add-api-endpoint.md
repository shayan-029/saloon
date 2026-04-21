---
name: add-api-endpoint
description: Add a new API endpoint to the NestJS backend. Pass the description as the argument (e.g. /add-api-endpoint GET /appointments/:id returns single booking).
---

Add the following endpoint to the backend based on: $ARGUMENTS

Steps:
1. Identify the correct controller file (or create a new module if needed).
2. Create or update the DTO in `dto/` using class-validator decorators.
3. Implement the service method — always async, always use `ConfigService` for env vars, throw NestJS built-in exceptions on errors.
4. Add the route in the controller with correct HTTP decorator and Swagger `@ApiOperation` / `@ApiResponse` decorators.
5. If a new module is needed, register it in `app.module.ts`.
6. Write a Jest unit test for the new service method in `*.spec.ts` alongside the service file.

Conventions to follow:
- Return plain objects (`.lean()`) not raw Mongoose documents
- 201 for POST, 200 for GET/DELETE
- Use `@Param('id')` with `ParseObjectIdPipe` when handling MongoDB `_id`
