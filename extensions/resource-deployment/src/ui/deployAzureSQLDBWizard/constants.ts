/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as nls from 'vscode-nls';
const localize = nls.loadMessageBundle();

export const standardWidth: string = '480px';

// Deploy Azure SQL DB wizard constants
export const WizardTitle = localize('deployAzureSQLDB.NewSQLDBTitle', "Deploy Azure SQL DB");
export const WizardDoneButtonLabel = localize('deployAzureSQLDB.ScriptToNotebook', "Script to Notebook");
export const MissingRequiredInformationErrorMessage = localize('deployCluster.MissingRequiredInfoError', "Please fill out the required fields marked with red asterisks.");

// Azure settings page constants
export const AzureSettingsPageTitle = localize('deployAzureSQLDB.AzureSettingsPageTitle', "Azure SQL Database - Azure Account Settings");
export const AzureSettingsPageDescription = localize('deployAzureSQLDB.AzureSettingsPageDescription', "   ");
export const AzureSettingsSummaryPageTitle = localize('deployAzureSQLDB.AzureSettingsSummaryPageTitle', "Azure Account Settings");
export const AzureAccountDropdownLabel = localize('deployAzureSQLDB.AzureAccountDropdownLabel', "Azure Account");
export const AzureAccountSubscriptionDropdownLabel = localize('deployAzureSQLDB.AzureSubscriptionDropdownLabel', "Subscription");
export const AzureAccountDatabaseServersDropdownLabel = localize('deployAzureSQLDB.AzureDatabaseServersDropdownLabel', "Server");
export const AzureAccountResourceGroupDropdownLabel = localize('deployAzureSQLDB.ResourceGroup', "Resource Group");
//@todo alma1 9/8/20 Region label used for upcoming server creation feature.
//export const AzureAccountRegionDropdownLabel = localize('deployAzureSQLDB.AzureRegionDropdownLabel', "Region (for Public IP Address)");

// Database settings page constants
export const DatabaseSettingsPageTitle = localize('deployAzureSQLDB.DatabaseSettingsPageTitle', "Database settings");
export const DatabaseSettingsPageDescription = localize('deployAzureSQLDB.DatabaseSettingsPageDescription', "   ");
export const FirewallRuleNameLabel = localize('deployAzureSQLDB.FirewallRuleNameLabel', 'Firewall rule name');
export const DatabaseNameLabel = localize('deployAzureSQLDB.DatabaseNameLabel', 'SQL database name');
export const StartIpAddressLabel = localize('deployAzureSQLDB.StartIpAddressLabel', "Min Ip Address in firewall allowed IP Range (Local machine IP by default)");
export const EndIpAddressLabel = localize('deployAzureSQLDB.EndIpAddressLabel', "Max IP Address in firewall allowed IP Range (Local machine IP by default)");
export const StartIpAddressShortLabel = localize('deployAzureSQLDB.StartIpAddressShortLabel', "Min Ip Address");
export const EndIpAddressShortLabel = localize('deployAzureSQLDB.EndIpAddressShortLabel', "Max IP Address");