import { Pipe, PipeTransform } from '@angular/core';
import { JobRole } from '../models/jobRole';

@Pipe({
  name: 'jobRoleTitle'
})
export class JobRoleTitlePipe implements PipeTransform {

  transform(roles: JobRole[], filterText: string): any {
    if(!roles) return[];
    if(!filterText) return roles;

    return roles.filter(c => {
      return c.title.toLowerCase().toLowerCase().
        includes(filterText.toLowerCase());
    });
  }

}
