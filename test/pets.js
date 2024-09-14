import { expect } from 'chai';
import {postRequest, putRequest, deleteRequest} from '../helpers/apiHelper.js';
import petData from '../fixtures/petData.json'assert { type: 'json' };



describe('Pets testsuite', () => {

    it('Verify that allows adding a Pet', async () => {
        const pet = petData.newPet;
        const response = await postRequest('/pet', pet);

        expect(response.status).to.equal(200);
        expect(response.data.name).to.equal(petData.newPet.name);
        expect(response.data.status).to.equal(petData.newPet.status);
    });

    it('Verify that allows updating Pet’s image, name, status', async () => {
        const pet = petData.updatePet;
        const response = await putRequest('/pet', pet);

        expect(response.status).to.equal(200);
        expect(response.data.photoUrls[0]).to.deep.equal(petData.updatePet.photoUrls[0]);
    });

    it('Verify that allows delete Pet', async () => {
        const creationResponse = await postRequest('/pet', petData.newPet);
        expect(creationResponse.status).to.equal(200);  // Assuming 200 is success status code
        const { id } = creationResponse.data;

        const deleteResponse = await deleteRequest(`/pet/${id}`);
        expect(deleteResponse.status).to.equal(200);
    });

});