import { NgModule } from '@angular/core';
import { BasicAccountsComponent } from './basic-accounts/basic-accounts';
import { SavingAccountsComponent } from './saving-accounts/saving-accounts';
@NgModule({
	declarations: [BasicAccountsComponent,
    SavingAccountsComponent],
	imports: [],
	exports: [BasicAccountsComponent,
    SavingAccountsComponent]
})
export class ComponentsModule {}
