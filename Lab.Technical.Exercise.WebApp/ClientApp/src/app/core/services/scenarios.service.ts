import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { IScenario } from '../models/Scenario';
import { IAlbum } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class ScenariosService {

  constructor(private logger: LoggerService, private apiService: AppService) { }

  fetchScenarios(): Observable<IScenario[]> {
    let renVal: Observable<IScenario[]>;
    this.logger.trace(`scenarios service:fetchScenarios`)
    renVal = this.apiService.get('api/scenarios');
    this.logger.trace(`scenarios service:fetchScenarios`)
    return renVal;
  }

  fetchScenariosByUserId(userId:string): Observable<IScenario> {
    let renVal: Observable<IScenario>;
    this.logger.trace(`scenarios service:fetchScenariosByUserId:${userId}`)
    renVal = this.apiService.get(`api/scenarios/ByUserId/${userId}`);
    this.logger.trace(`scenarios service:fetchScenariosByUserId:${userId}`)
    return renVal;
  }

  creatAlbum(albumRequest: IAlbum): Observable<any> {
    let renVal: Observable<any>;
    // this.logger.trace(`--> scenarios(${albumRequest.name})`);
    renVal = this.apiService.post('/api/scenarios', albumRequest);
    // this.logger.trace(`--> scenarios(${albumRequest.name})`);
    return renVal;
  }
}