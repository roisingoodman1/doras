import { Component, OnInit } from '@angular/core';
import { Capability } from '../models/capability';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-capability',
  templateUrl: './delete-capability.component.html',
  styleUrls: ['./delete-capability.component.css']
})
export class DeleteCapabilityComponent implements OnInit {
  public capabilities: Capability[];
  public invalid: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCapabilities().subscribe((c) => {
      this.capabilities = c;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.invalid !== true) {
      this.data.deleteCapability(form.value.cap).subscribe((c) => {
        this.ngOnInit();
      });
    }
  }

  onChange(value: any) {
    this.data.getJobRolesByCapId(value).subscribe((c) => {
      this.invalid = c.length === 0 ? false : true;
    });
  }
}
