import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) { }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, this.aluno, 'edit']);
  }

  ngOnInit(){
    //this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunoService.getAluno(id);
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
