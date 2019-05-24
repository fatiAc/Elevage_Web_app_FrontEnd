import {Injectable} from '@angular/core';
import {HttpMethodsService} from "./tools/http-methods.service";

@Injectable()
export class ParametrageService {

    constructor(private httpMethod: HttpMethodsService) {
    }

    getAllTypPaddocksInfo() {
        const url = 'http://localhost:8080/app/parametrage/allTypesPaddock';
        return this.httpMethod.get(url, '');
    }

    getAllPaddocksInfo() {
        const url = 'http://localhost:8080/app/parametrage/allPaddocks';
        return this.httpMethod.get(url, '');
    }

    getAllNourritureInfo() {
        const url = 'http://localhost:8080/app/parametrage/allNourriture';
        return this.httpMethod.get(url, '');
    }

    getAllIngrdntInfo() {
        const url = 'http://localhost:8080/app/parametrage/allIngrdnt';
        return this.httpMethod.get(url, '');
    }

    createTypePaddock(type) {
        const url = 'http://localhost:8080/app/parametrage/createTypePaddock';
        return this.httpMethod.post(url, {type});
    }

    editTypePaddock(type, newType) {
        const url = 'http://localhost:8080/app/parametrage/updatTypPaddock/' + type + '/' + newType;
        return this.httpMethod.put(url);
    }

    deleteTypPaddock(type) {
        const url = 'http://localhost:8080/app/parametrage/deleteByType/' + type;
        return this.httpMethod.delete(url);
    }

    createPaddock(paddockName, typPaddock) {
        const url = 'http://localhost:8080/app/parametrage/createPaddock';
        return this.httpMethod.post(url, {paddockName, typPaddock});
    }

    editPaddock(name, newName, newTypPaddock) {
        const url = 'http://localhost:8080/app/parametrage/updatPaddock/' + name + '/' + newName + '/' + newTypPaddock;
        return this.httpMethod.put(url);
    }

    deletePaddock(nom) {
        const url = 'http://localhost:8080/app/parametrage/deletePaddock/' + nom;
        return this.httpMethod.delete(url);
    }

    createAnimal(snit, paddockID) {
        const url = 'http://localhost:8080/app/parametrage/createAnimal';
        return this.httpMethod.post(url, {snit, paddockID});
    }

    editAnimalPaddock(snit, paddockID) {
        const url = 'http://localhost:8080/app/parametrage/updatPaddockOfAnimal/' + snit + '/' + paddockID;
        return this.httpMethod.put(url);
    }

    deleteAnimal(snit) {
        const url = 'http://localhost:8080/app/parametrage/deleteAnimal/' + snit;
        return this.httpMethod.delete(url);
    }

    createIngredient(name) {
        const url = 'http://localhost:8080/app/parametrage/createIngredient';
        return this.httpMethod.post(url, {name});
    }

    deleteIngredient(name) {
        const url = 'http://localhost:8080/app/parametrage/deleteIngredient/' + name;
        return this.httpMethod.delete(url);
    }

    editIngred(name, newName) {
        const url = 'http://localhost:8080/app/parametrage/updatIngredName/' + name + '/' + newName;
        return this.httpMethod.put(url);
    }

    createRation(rationName, formuleDetails) {
        const url = 'http://localhost:8080/app/parametrage/createRationFormule';
        return this.httpMethod.post(url, {rationName, formuleDetails});
    }

    createMachienWithSpecialite(name, machineCapacite, machineSpecialiteDetails) {
        const url = 'http://localhost:8080/app/parametrage/createMachineWithSpecialtes';
        return this.httpMethod.post(url, {name, machineCapacite, machineSpecialiteDetails});
    }

    deleteMachine(name) {
        const url = 'http://localhost:8080/app/parametrage/deleteMachine/' + name;
        return this.httpMethod.delete(url);
    }

    createPeriode(periode) {
        const url = 'http://localhost:8080/app/parametrage/createPeriode';
        return this.httpMethod.post(url, {periode});
    }

    deletePeriod(period) {
        const url = 'http://localhost:8080/app/parametrage/deletePeriod/' + period;
        return this.httpMethod.delete(url);
    }

    editPeriode(periode, newPeriod) {
        const url = 'http://localhost:8080/app/parametrage/updatPeriode/' + periode + '/' + newPeriod;
        return this.httpMethod.put(url);
    }

    createUser(login) {
        const url = 'http://localhost:8080/app/parametrage/createUser';
        return this.httpMethod.post(url, {login});
    }

    deleteUser(login) {
        const url = 'http://localhost:8080/app/parametrage/deleteUser/' + login;
        return this.httpMethod.delete(url);
    }


}
