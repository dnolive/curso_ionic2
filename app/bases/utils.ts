export class DateFormat  {

  private data:Date;
  private dateFormatted:string;
  private masc:string = 'Y-m-d H:i:s';
  private dia:any;
  private mes:any;
  private ano:any;
  private ano_res:any;
  private hora:any;
  private minuto:any;
  private segundo:any;

  constructor(objData:Date, mascView?:string) {
    this.data    = objData;
    this.dia     = (this.data.getDate() < 10) ? '0'+this.data.getDate() : this.data.getDate();
    this.mes     = ((this.data.getMonth() + 1) < 10) ? '0'+(this.data.getMonth() + 1) : this.data.getMonth() + 1;
    this.ano     = this.data.getFullYear();
    this.ano_res = [this.data.getFullYear().toString().split('')[2],this.data.getFullYear().toString().split('')[3]].join('');
    this.hora    = (this.data.getHours() < 10) ? '0'+this.data.getHours() : this.data.getHours();
    this.minuto  = (this.data.getMinutes() < 10) ? '0'+this.data.getMinutes() : this.data.getMinutes();
    this.segundo = (this.data.getSeconds() < 10) ? '0'+this.data.getSeconds() : this.data.getSeconds();

    let format   = (mascView) ? mascView : this.masc;

    format = format.replace(/d/, this.dia)
      .replace(/m/, this.mes)
      .replace(/Y/, this.ano)
      .replace(/y/, this.ano_res)
      .replace(/H/, this.hora)
      .replace(/i/, this.minuto)
      .replace(/s/, this.segundo);

    this.dateFormatted = format;
  }

  public getDateFormatted() {

    return this.dateFormatted;
  }

}

var data = new DateFormat(new Date(),'d/m/Y H:i:s');
console.log(data.getDateFormatted());
