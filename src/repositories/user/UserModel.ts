import * as mongoose from 'mongoose';
import UserSchema from './UserSchema';
import IUserModel from './IUserModel';

export const userSchema = new UserSchema({
    collection: 'user',
});

// Components of swaggerUI
/**
 * @swagger
 * components:
 *   schemas:
 *     Success:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Function Performed Successfully
 *         data:
 *           $ref: '#/components/schemas/User'
 *         status:
 *           type: string
 *           example: success
 *     Login:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: User logged in successfully
 *         data:
 *           $ref: '#/components/schemas/Token'
 *         status:
 *           type: string
 *           example: success
 *     Token:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTdWNjZXNzaXZlIFRlY2hub2xvZ2llcyIsImF1ZCI6Ind3dy5zdWNjZXNzaXZlLmluIiwic3ViIjoiTGVhcm4gYW5kIEltcGxlbWVudCIsImVtYWlsIjoiaGVhZC50cmFpbmVyQHN1Y2Nlc3NpdmUudGVjaCIsImlhdCI6MTYwNjQwMzI2OCwiZXhwIjoxNjA2NDA0MTY4fQ.0qVPgXSpMpJLK5TqwFTjzb5ADN589PmPOrk30Uuoado"
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: Authentication Failed
 *         message:
 *           type: string
 *           example: User is Invalid
 *         status:
 *           type: integer
 *           example: 403
 *         timestamp:
 *           type: string
 *           example: "2020-11-25T04:58:44.674Z"
 *     Getall:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: trainee fetched successfully
 *         data:
 *           $ref: '#/components/schemas/userWithCount'
 *     userWithCount:
 *       type: object
 *       properties:
 *          totalCount:
 *            type: integer
 *            example: 4
 *          UsersList:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/User'
 *     Delete:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: User Deleted Successfully
 *         data:
 *           type: object
 *         status:
 *           type: string
 *           example: success
 *     User:
 *       type: object
 *       properties:
 *           originalId:
 *             type: string
 *             example: aad7asd90DFf8a0sd
 *           id:
 *             type: string
 *             example: aad7asd90DFf8a0sd
 *           email:
 *             type: string
 *             example: head.trainer@successive.tech
 *           name:
 *             type: string
 *             example: Head Trainer
 *           role:
 *             type: string
 *             example: head-trainer
 *           password:
 *             type: string
 *             example: 87ad9f39n88.auyasidasdsda12kxnb38sn22239exd.23as9cd
 *           createdAt:
 *             type: string
 *             example: "2020-11-25T04:58:44.674Z"
 * securityDefinitions:
 *   ApiKeyAuth:
 *     type: apiKey
 *     in: header
 *     name: Authorization
 */


export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
(
    'User',
    userSchema,
    'User',
    true,
);
