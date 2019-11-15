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
  public capabilities: Capability[]

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCapabilities().subscribe((c) => {
      this.capabilities = c;
    });
  }

  onSubmit(form: NgForm) {
    this.data.getJobRolesByCapId(form.value.cap).subscribe((c) => {
      if (c.length === 0) {
        this.data.deleteCapability(form.value.cap).subscribe();
        window.location.reload();
      }
    });
  }

}
