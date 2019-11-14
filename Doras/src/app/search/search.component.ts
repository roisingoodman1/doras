import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { JobRole } from '../models/jobRole';
import { DataService } from '../data.service';
import { Band } from '../models/Band'
=======

>>>>>>> inital set yp
=======
import { JobRole } from '../models/jobRole';
import { DataService } from '../data.service';
import { Band } from '../models/Band'
>>>>>>> search page list
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> search page list
  titles: JobRole[];
  bandList: Band[] = [];
  div: HTMLElement;
  constructor(data: DataService) { 
   /* let clickable = document.getElementById("hidden");
    clickable.addEventListener("click", (e:Event) => this.onClick());*/
    data.getJobTitles().subscribe(c=>{
      this.titles = c;
      console.log(this.titles);
      c.forEach(job => {
        if (!this.bandList[job.bandId]){
          data.getBandById(job.bandId).subscribe(c1 => {
            this.bandList[job.bandId] = c1[0].bandName;
          })
        }
      });
    });
    
  }
  
  
  onClick() {
    
  }
  
<<<<<<< HEAD

  

  ngOnInit() {
    
    
  }

  

=======
=======
>>>>>>> search page list

  

  ngOnInit() {
    
    
  }

<<<<<<< HEAD
>>>>>>> inital set yp
=======
  

>>>>>>> search page list
}
