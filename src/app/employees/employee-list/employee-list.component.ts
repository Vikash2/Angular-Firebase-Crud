import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './../../shared/employee.model';
import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  list: Employee[];
  constructor(
    private _service: EmployeeService,
    public firestore: AngularFirestore,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._service.getEmployees().subscribe((actionArray) => {
      this.list = actionArray.map((item) => {
        return {
          id: item.payload.doc.id,
          ...(item.payload.doc.data() as Employee),
        };
      });
    });
  }
  onEdit(emp: Employee) {
    this._service.formData = Object.assign({}, emp);
  }
  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('Employee/' + id).delete();
      this.toastr.warning('Deleted');
    }
  }
}
