import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/service/user.service';
import { User } from 'src/app/core/models/user.model';
declare var $;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  dataTable: any;
  dtOptions: any;
  tableData = [];
  @ViewChild('dataTable', {static: true}) table;
  users: User[];


  constructor(private service: UserService) { }

  ngOnInit() {
    this.getAll();
    this.getDataFromSource();
  }

  getAll(){
    this.service.getAll().subscribe(data => this.users = data.content);
  }

  delete(id) {
    this.service.delete(id).subscribe(() => this.getAll());
  }

  getDataFromSource() {
    this.service.getAll().subscribe(data => {
      this.tableData = data.content;
      console.log(data)
      this.dtOptions = {
        // data: this.tableData,
        // columns: [
        //   {title: 'ID', data: 'id'},
        //   {title: 'Name', data: 'name'},
        //   {title: 'Email', data: 'email'},
        // ]
        "oLanguage": {
          "oPaginate":
          {
              "sFirst": "&lt&lt",
              "sLast": "&gt&gt",
              "sNext": "&gt",
              "sPrevious": "&lt"
          },
          "sEmptyTable": "Nenhum usuário encontrado",
          "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ usuários",
          "sInfoEmpty": "Mostrando 0 até 0 de 0 usuários",
          "sInfoFiltered": "(Filtrados de _MAX_ usuários)",
          "sInfoPostFix": "",
          "sInfoThousands": ".",
          "sLengthMenu": "_MENU_ Resultados por página",
          "sLoadingRecords": "Carregando...",
          "sProcessing": "Processando...",
          "sZeroRecords": "Nenhum usuário encontrado",
          "sSearch": "Pesquisar ",
      }
      };
    }, err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    });
  }

}
