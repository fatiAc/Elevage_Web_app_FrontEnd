import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ParametrageService} from "../../../../services/parametrage.service";
import {UserService} from "../../../../services/user.service";
import {NotificationService} from "../../../../services/tools/notification.service";

@Component({
    selector: 'app-parametrage',
    templateUrl: './parametrage.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ParametrageComponent implements OnInit {
    paddockType: string;
    newPaddocksType = [];
    typPaddockToEdit: any;
    disablAddTypPaddock = false;
    disablEditTypPaddock = true;

    allPaddockType: any;
    allPaddocks: any;
    paddockName: string;
    typeOfNewPaddock: any;
    newPaddocks = [];
    paddockToEdit: any;
    disablAddPaddock = false;
    disablEditPaddock = true;

    snit: number;
    newAnimals: any;
    paddockOfAnimal: any;
    animalDataToEdit: any;
    disablAddAnimal = false;
    disablEditAnimal = true;

    ingredientName: string;
    newIngredients = [];
    ingredDataToEdit: any;
    disableAddIngrd = false;
    disableEditIngrd = true;

    rationName: string;
    allIngrdnts: any;
    selectedIngrdnts: any;
    ingredntsOfNourritur: any;
    ingrdDropDownSettings = {};

    isOK = true;
    isIngrdnt = false;

    machineName: string;
    machineCapacite: number;
    allRations: any;
    rationDropDowSettings = {};
    selectedRations: any;
    machineDetails = [];

    periodName: string;
    newPeriods = [];
    periodToEdit: any;
    disablAddPeriod = false;
    disableEditPeriode = true;

    userMatricule: string;
    newUsers = [];

    constructor(private parametrageSrv: ParametrageService,
                private userService: UserService, private notificationSrv: NotificationService) {

    }

    ngOnInit() {
        // this.userService.isAuthorizedUser();
        this.initUI();
    }

    initUI() {
        this.allPaddocksInfo();
        this.initTypePaddpcksDropDpwn();
        this.initIngrdtSropDown();
        this.initNourritureDropDown();
    }

    initTypePaddpcksDropDpwn() {
        this.parametrageSrv.getAllTypPaddocksInfo()
            .subscribe(response => {
                this.allPaddockType = response;
            });
    }

    initNourritureDropDown() {
        this.parametrageSrv.getAllNourritureInfo()
            .subscribe(response => {
                this.allRations = response;
            });

        this.rationDropDowSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'nom',
            selectAllText: 'Selectionner tout',
            unSelectAllText: 'désélectionner',
            allowSearchFilter: true
        };
    }

    allPaddocksInfo() {
        this.allPaddocks = [];
        this.parametrageSrv.getAllPaddocksInfo()
            .subscribe(respoonse => {
                this.allPaddocks = respoonse;
            });
    }


    saveTypePaddock() {
        if (this.paddockType == null || this.paddockType === '') {
            this.notificationSrv.warningToast('Veuillez saisir le nom du type ', 'Erreur');
        } else {
            this.parametrageSrv.createTypePaddock(this.paddockType)
                .subscribe(response => {
                    if (response === false) {
                        this.notificationSrv.warningToast('Ce type existe déja', 'Erreur');
                    } else {
                        this.notificationSrv.successToas('Vous avez ajouté un nouveau type de paddok', "");
                        this.newPaddocksType.push({type: this.paddockType});
                        this.refreshTypPaddockUI();
                    }
                });
        }
    }

    refreshTypPaddockUI() {
        this.paddockType = null;
        this.disablAddTypPaddock = false;
        this.disablEditTypPaddock = true;
    }

    toEditTypPaddock(data) {
        this.typPaddockToEdit = data;
        this.paddockType = data.type;
        this.disablAddTypPaddock = true;
        this.disablEditTypPaddock = false;
    }

    editTypPaddock() {
        if (this.paddockType == null || this.paddockType === '') {
            this.notificationSrv.warningToast('Veuillez saisir le nom du type ', 'Erreur');
        } else {
            this.parametrageSrv.editTypePaddock(this.typPaddockToEdit.type, this.paddockType)
                .subscribe(response => {
                    this.notificationSrv.successToas('Vous avez bien modifié le type de paddock', '');
                    this.newPaddocksType.splice(this.newPaddocksType.indexOf(this.typPaddockToEdit), 1);
                    this.newPaddocksType.push({type: this.paddockType});
                    this.refreshTypPaddockUI();
                });
        }
    }

    removeSelectedTypPaddockl(data) {
        this.parametrageSrv.deleteTypPaddock(data.type)
            .subscribe(response => {
                this.newPaddocksType.splice(this.newPaddocksType.indexOf(data), 1);
            });
    }

    savePaddock() {
        if (this.paddockName == null) {
            this.notificationSrv.warningToast('Veuillez saisir le nom du paddock ', 'Erreur');
        } else if (this.typeOfNewPaddock == null) {
            this.notificationSrv.warningToast('Veuillez selectioner un type pour ce paddock ', 'Erreur');
        } else {
            this.parametrageSrv.createPaddock(this.paddockName, this.typeOfNewPaddock.id)
                .subscribe(response => {
                    if (response === false) {
                        this.notificationSrv.warningToast('Ce paddock existe déja ', 'Erreur ! ');
                    } else {
                        this.newPaddocks.push({nom: this.paddockName, typOfPaddock: this.typeOfNewPaddock});
                        this.notificationSrv.successToas('Vous avez ajouté un nouveau paddok', '');
                        this.refreshPaddockUI();
                    }
                });
        }
    }

    refreshPaddockUI() {
        this.paddockName = null;
        this.typeOfNewPaddock = null;
    }

    saveAnimal() {
        if (this.snit == null) {
            this.notificationSrv.warningToast('Veuillez saisir le SNIT ', 'Erreur');
        } else if (!this.paddockOfAnimal) {
            this.notificationSrv.warningToast('Veuillez selectioner un paddock pour cet animal ', 'Erreur');
        } else {
            this.parametrageSrv.createAnimal(this.snit, this.paddockOfAnimal.id)
                .subscribe(response => {
                    if (response === false) {
                        this.notificationSrv.warningToast('Cet animal existe déja ', 'Erreur ! ');
                    } else {
                        this.newAnimals.push({snit: this.snit, paddock: this.paddockOfAnimal.nom});
                        this.notificationSrv.successToas('Vous avez ajouté un nouveau animal', '');
                        this.refreshAnimalUI();
                    }
                });
        }
    }

    toEditSelectedPaddock(data) {
        this.paddockToEdit = data;
        this.paddockName = data.nom;
        this.typeOfNewPaddock = data.typOfPaddock;
        this.disablAddPaddock = true;
        this.disablEditPaddock = false;
    }

    editPaddock() {
        if (this.paddockName == null || this.paddockName === '') {
            this.notificationSrv.warningToast('Veuillez saisir le nom du paddock ', 'Erreur');
        } else if (this.typeOfNewPaddock == null) {
            this.notificationSrv.warningToast('Veuillez selectioner un type pour ce paddock ', 'Erreur');
        } else {
            this.parametrageSrv.editPaddock(this.paddockToEdit.nom, this.paddockName, this.typeOfNewPaddock.id)
                .subscribe(response => {
                    this.newPaddocks.splice(this.newPaddocks.indexOf(this.paddockToEdit), 1);
                    this.newPaddocks.push({nom: this.paddockName, typOfPaddock: this.typeOfNewPaddock});
                    this.notificationSrv.successToas('Vous avez bien modifié le paddock', '');
                    this.refreshPaddockUI();
                });
        }
    }

    removePaddock(data) {
        this.parametrageSrv.deletePaddock(data.nom)
            .subscribe(response => {
                this.newPaddocks.splice(this.newPaddocks.indexOf(data), 1);
                this.notificationSrv.successToas('Vous avez bien supprimé le paddock', '');
            });
    }

    toEdit(data) {
        this.animalDataToEdit = data;
        this.snit = data.snit;
        this.disablAddAnimal = true;
        this.disablEditAnimal = false;
    }

    editSelectedAnimal() {
        this.parametrageSrv.editAnimalPaddock(this.snit, this.paddockOfAnimal.id)
            .subscribe(response => {
                this.newAnimals.splice(this.newAnimals.indexOf(this.animalDataToEdit), 1);
                this.newAnimals.push({snit: this.snit, paddock: this.paddockOfAnimal.nom});
                this.notificationSrv.successToas('Vous avez bien modifié cet animal', '');
                this.refreshAnimalUI();
            });
        this.disablEditAnimal = true;
        this.disablAddAnimal = false;
    }

    removeSelectedAnimal(data) {
        this.parametrageSrv.deleteAnimal(data.snit)
            .subscribe(response => {
                this.newAnimals.splice(this.newAnimals.indexOf(data), 1);
            });
    }

    refreshAnimalUI() {
        this.paddockOfAnimal = [];
        this.snit = null;
        this.disablAddAnimal = false;
        this.disablEditAnimal = true;
    }

    saveIngredient() {
        if (this.ingredientName == null || this.ingredientName === '') {
            this.notificationSrv.warningToast('Veuillez saisir le nom de l\'ingredient\n ', 'Erreur');
        } else {
            this.parametrageSrv.createIngredient(this.ingredientName)
                .subscribe(response => {
                    if (response === false) {
                        this.notificationSrv.warningToast('Cet ingredient existe déja ', 'Erreur ! ');
                    } else {
                        this.newIngredients.push({ingredientName: this.ingredientName});
                        this.notificationSrv.successToas('Vous avez ajouté un nouveau ingredient', '');
                        this.ingredientName = null;
                    }
                });
        }
    }

    deleteIngredient(data) {
        this.parametrageSrv.deleteIngredient(data.ingredientName)
            .subscribe(response => {
                this.newIngredients.splice(this.newIngredients.indexOf(data), 1);
            });
    }

    toEditSelectedIngrdt(data) {
        this.ingredDataToEdit = data;
        this.ingredientName = data.ingredientName;
        this.disableAddIngrd = true;
        this.disableEditIngrd = false;
    }

    editSelectedIngrd() {
        if (this.ingredientName != null || this.ingredientName === '') {
            this.parametrageSrv.editIngred(this.ingredDataToEdit.ingredientName, this.ingredientName)
                .subscribe(response => {
                    this.notificationSrv.successToas('Vous avez bien modifié cet ingredient', '');
                    this.newIngredients.splice(this.newIngredients.indexOf(this.ingredDataToEdit), 1);
                    this.newIngredients.push({ingredientName: this.ingredientName});
                    this.refreshIngrdUI();
                });
        }
    }

    refreshIngrdUI() {
        this.ingredientName = null;
        this.disableEditIngrd = true;
        this.disableAddIngrd = false;
    }

    initIngrdtSropDown() {
        this.parametrageSrv.getAllIngrdntInfo()
            .subscribe(response => {
                this.allIngrdnts = response;
            });
        this.ingrdDropDownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'nom',
            selectAllText: 'Selectionner tout',
            unSelectAllText: 'désélectionner',
            allowSearchFilter: true
        };
    }

    getSelectedIngrdnt() {
        this.ingredntsOfNourritur = [];
        for (const item of this.selectedIngrdnts) {
            this.ingredntsOfNourritur.push({id: item.id, nom: item.nom, formule: null});
        }
    }


    saveRation() {
        let sum = 0;
        if (this.rationName == null || this.rationName === '') {
            this.notificationSrv.warningToast('Veuillez saisir le nom de la nourritue ', 'Erreur');
        } else {
            for (const item of this.ingredntsOfNourritur) {
                if (item.formule == null || item.formule === '') {
                    this.isOK = false;
                    this.notificationSrv.warningToast('Veuillez remplir tous les formules', 'Erreur');
                } else {
                    this.isIngrdnt = true;
                    sum += item.formule;
                }
            }
            if (!this.isIngrdnt) {
                this.notificationSrv.warningToast('Veuillez selectionner des ingredients ', 'Erreur');
            } else if (this.isOK) {
                if (sum !== 100) {
                    sum = 0;
                    this.notificationSrv.warningToast('Vous n\'avez\'\n pas atteint 100% des formules,' +
                        ' veuillez recalculer les pourcentages', 'Erreur');
                } else {
                    this.parametrageSrv.createRation(this.rationName, this.ingredntsOfNourritur)
                        .subscribe(response => {
                            // this.notificationSrv.successToas('Vous avez bien ajouté une nouvelle nourriture ', '');
                            this.rationName = null;
                            this.ingredntsOfNourritur = null;
                            this.selectedIngrdnts = null;
                            this.isOK = true;
                            this.isIngrdnt = false;
                        });
                }
            }
        }
    }

    saveMachine() {
        if (this.machineName == null || this.machineName === '') {
            this.notificationSrv.warningToast('Veuillez saisir le nom de la machine ', 'Erreur');
        } else if (this.selectedRations === undefined) {
            this.notificationSrv.warningToast('Veuillez sélectionner des nourritures pour cette machine ', 'Erreur');
        } else {
            this.parametrageSrv.createMachienWithSpecialite(this.machineName, this.machineCapacite, this.selectedRations)
                .subscribe(response => {
                    if (response === false) {
                        this.notificationSrv.warningToast('Ce nom de machine existe deja, veuillez saisir un nouveau nom', 'Erreur');
                    } else {
                        let data = '';
                        for (const item of this.selectedRations) {
                            data += item.nom + ', ';
                        }
                        this.machineDetails.push({
                            machineName: this.machineName,
                            capacite: this.machineCapacite,
                            specialite: data,
                            machineSpecialite: this.machineDetails
                        });
                        this.refreshMachineUI();
                        this.notificationSrv.successToas('Vous avez bien ajouté une nouvelle machine ', '');
                    }
                });
        }
    }

    refreshMachineUI() {
        this.machineName = null;
        this.selectedRations = null;
        this.machineCapacite = null;
    }

    removeMachine(data) {
        this.parametrageSrv.deleteMachine(data.machineName)
            .subscribe(response => {
                this.machineDetails.splice(this.machineDetails.indexOf(data), 1);
                this.notificationSrv.successToas('Vous avez bien supprimé la machine ', '');
            });
    }

    savePeriode() {
        if (this.periodName == null || this.periodName === '') {
            this.notificationSrv.warningToast('Veuillez saisir le nom de la période', 'Erreur');
        } else {
            this.parametrageSrv.createPeriode(this.periodName)
                .subscribe(response => {
                    if (response === false) {
                        this.notificationSrv.warningToast('Cette période existe deja ', 'Erreur');
                    } else {
                        this.newPeriods.push({periodName: this.periodName});
                        this.notificationSrv.successToas('Vous avez bien ajouté une nouvelle période ', '');
                        this.refreshPeriodUI();
                    }
                });
        }
    }

    refreshPeriodUI() {
        this.periodName = null;
        this.disablAddPeriod = false;
        this.disableEditPeriode = true;
    }

    removePeriode(data) {
        this.parametrageSrv.deletePeriod(data.periodName)
            .subscribe(response => {
                this.newPeriods.splice(this.newPeriods.indexOf(data), 1);
                this.notificationSrv.successToas('Vous avez bien supprimé la période ', '');
            });
    }

    toEditPeriod(data) {
        this.periodName = data.periodName;
        this.periodToEdit = data;
        this.disablAddPeriod = true;
        this.disableEditPeriode = false;

    }

    editPeriod() {
        if (this.periodName == null || this.periodName === '') {
            this.notificationSrv.warningToast('Veuillez saisir le nom de la période', 'Erreur');
        } else {
            this.parametrageSrv.editPeriode(this.periodToEdit.periodName, this.periodName)
                .subscribe(response => {
                    this.newPeriods.splice(this.newPeriods.indexOf(this.periodToEdit), 1);
                    this.newPeriods.push({periodName: this.periodName});
                    this.notificationSrv.successToas('Vous avez bien modifié la période ', '');
                    this.refreshPeriodUI();
                });
        }
    }

    saveUser() {
        this.parametrageSrv.createUser(this.userMatricule)
            .subscribe(response => {
                if (response == false) {
                    this.notificationSrv.warningToast('Cet utilisateur existe deja', 'Erreur');
                } else {
                    this.notificationSrv.successToas('Vous avez bien ajouté un nouveau utilisateur ', '');
                    this.newUsers.push({matricule: this.userMatricule});
                }
            })
    }

    removeUser(data) {
        this.parametrageSrv.deleteUser(this.userMatricule)
            .subscribe(response => {
                this.newUsers.splice(this.newUsers.indexOf(data), 1);
            });
    }
}
