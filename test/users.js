import { expect } from 'chai';
import  { postRequest } from '../helpers/apiHelper.js';
import userData from '../fixtures/userData.json'assert { type: 'json' };
import {getRequest} from "../helpers/apiHelper.js";





describe('Users testsuite', () => {

    it('Verify that allows creating a User', async () => {
        const user = userData.newUser;
        const response = await postRequest('/user', user);

        expect(response.status).to.equal(200);
        expect(response.data.message).to.be.a('string');
    });

    it('Verify that allows login as a User ', async () => {
        const loginDetails = userData.loginCredentials;
        const response = await getRequest('/user/login', loginDetails);

        expect(response.status).to.equal(200);
        expect(response.data.message).to.include("logged in user session:");
        //console.log(response.data.message)
    });

    it('Verify that allows creating the list of Users', async () => {
        const user = userData.newUsersList;
        const response = await postRequest('/user/createWithList', user);

        expect(response.status).to.equal(200);
        expect(response.data.message).to.equal("ok");
    });

    it('Verify that allows Log out User', async () => {
        const loginDetails = userData.loginCredentials;//It works as well if user is not logged in how is that possible?
        await getRequest('/user/login', loginDetails);
        const response = await getRequest('/user/logout');

        expect(response.status).to.equal(200);
        expect(response.data.message).to.equal('ok');
    });




});