/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as constants from './constants';
import { INotebookService } from '../../services/notebookService';
import { IToolsService } from '../../services/toolsService';
import { WizardBase } from '../wizardBase';
import { WizardPageBase } from '../wizardPageBase';
import { DeployAzureSQLDBWizardModel } from './deployAzureSQLDBWizardModel';
import { AzureSQLDBWizardInfo } from '../../interfaces';
import { AzureSettingsPage } from './pages/azureSettingsPage';
import { VmSettingsPage } from './pages/vmSettingsPage';
import axios, { AxiosRequestConfig } from 'axios';
import { NetworkSettingsPage } from './pages/networkSettingsPage';
import { SqlServerSettingsPage } from './pages/sqlServerSettingsPage';

export class DeployAzureSQLDBWizard extends WizardBase<DeployAzureSQLDBWizard, WizardPageBase<DeployAzureSQLDBWizard>, DeployAzureSQLDBWizardModel> {

	public get notebookService(): INotebookService {
		return this._notebookService;
	}

	public get toolService(): IToolsService {
		return this._toolsService;
	}

	constructor(private wizardInfo: AzureSQLDBWizardInfo, private _notebookService: INotebookService, private _toolsService: IToolsService) {
		super(
			constants.WizardTitle,
			new DeployAzureSQLDBWizardModel(),
			_toolsService
		);
	}

	protected initialize(): void {
		this.setPages(this.getPages());
		this.wizardObject.generateScriptButton.hidden = true;
		this.wizardObject.doneButton.label = constants.WizardDoneButtonLabel;
	}

	protected async onOk(): Promise<void> {
		await this.scriptToNotebook();
	}

	protected onCancel(): void {
		throw new Error('Method not implemented.');
	}

	private getPages(): WizardPageBase<DeployAzureSQLDBWizard>[] {
		const pages: WizardPageBase<DeployAzureSQLDBWizard>[] = [];
		pages.push(new AzureSettingsPage(this));
		pages.push(new VmSettingsPage(this));
		pages.push(new NetworkSettingsPage(this));
		pages.push(new SqlServerSettingsPage(this));
		return pages;
	}

	private async scriptToNotebook(): Promise<void> {
		this.setEnvironmentVariables(process.env);
		const variableValueStatements = this.model.getCodeCellContentForNotebook();
		console.log(variableValueStatements);
		console.log(this.wizardInfo);
		//const insertionPosition = 5; // Cell number 5 is the position where the python variable setting statements need to be inserted in this.wizardInfo.notebook.
		// try {
		// 	await this.notebookService.launchNotebookWithEdits(this.wizardInfo.notebook, variableValueStatements, insertionPosition);
		// } catch (error) {
		// 	// vscode.window.showErrorMessage(getErrorMessage(error));
		// }
	}

	private setEnvironmentVariables(env: NodeJS.ProcessEnv): void {
		env['AZDATA_NB_VAR_AZURE_SQLDB_PASSWORD'] = this.model.serverPassword;
		// env[VariableNames.DockerPassword_VariableName] = this.model.getStringValue(VariableNames.DockerPassword_VariableName);
		// if (this.model.authenticationMode === AuthenticationMode.ActiveDirectory) {
		// 	env[VariableNames.DomainServiceAccountPassword_VariableName] = this.model.getStringValue(VariableNames.DomainServiceAccountPassword_VariableName);
		// }
	}

	public async getRequest(url: string): Promise<any> {
		let token = this.model.securityToken.token;
		const config: AxiosRequestConfig = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			validateStatus: () => true // Never throw
		};
		const response = await axios.get(url, config);
		return response;
	}
}
