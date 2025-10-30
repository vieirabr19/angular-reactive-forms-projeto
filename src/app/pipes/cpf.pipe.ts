import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'cpf',
  standalone: false
})
export class CpfPipe implements PipeTransform {
  transform(cpf: number, hideNumbers: boolean = false): string {
    if(!cpf) return '';

    let formatedCpf = cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    if(hideNumbers){
      formatedCpf = `XXX.${formatedCpf.substring(4, 11)}-XX`;
    }

    return formatedCpf;
  }
}