export class Modelo {

  private _id: number;

  constructor() {
    this._id = 0;
  }

  public get id(): number{
    return this._id;
  }
  public set id(id: number){
    this._id = id;
  }

}
